import stripe
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Order
from tasks.order_tasks import update_order_status_from_stripe

class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).prefetch_related('items__product')
    def get_serializer_class(self):
        from .serializers import OrderSerializer
        return OrderSerializer

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def stripe_webhook(request):
    payload = request.body
    sig     = request.META.get('HTTP_STRIPE_SIGNATURE', '')
    try:
        event = stripe.Webhook.construct_event(payload, sig, settings.STRIPE_WEBHOOK_SECRET)
    except (ValueError, stripe.error.SignatureVerificationError):
        return HttpResponse(status=400)

    if event['type'] == 'payment_intent.succeeded':
        pi = event['data']['object']
        update_order_status_from_stripe.delay(pi['id'], 'confirmed')
    elif event['type'] == 'payment_intent.payment_failed':
        pi = event['data']['object']
        update_order_status_from_stripe.delay(pi['id'], 'cancelled')

    return HttpResponse(status=200)
