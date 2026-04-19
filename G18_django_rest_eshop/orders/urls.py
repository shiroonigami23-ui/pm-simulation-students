from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet, stripe_webhook
router = DefaultRouter()
router.register('', OrderViewSet, basename='order')
urlpatterns = router.urls + [path('webhook/stripe/', stripe_webhook)]
