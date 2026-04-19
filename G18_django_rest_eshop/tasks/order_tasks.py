from config.celery import app
from django.core.mail import send_mail
import logging
logger = logging.getLogger(__name__)

@app.task(bind=True, max_retries=3)
def send_order_confirmation(self, order_id: int):
    """Send confirmation email after order is placed."""
    try:
        from orders.models import Order
        order = Order.objects.select_related('user').get(id=order_id)
        send_mail(
            subject=f'Order #{order.id} Confirmed',
            message=f'Hi {order.user.username}, your order of ${order.total_price} is confirmed.',
            from_email='noreply@eshop.com',
            recipient_list=[order.user.email],
        )
        logger.info(f'Confirmation email sent for order {order_id}')
    except Exception as exc:
        raise self.retry(exc=exc, countdown=60)

@app.task
def update_order_status_from_stripe(payment_intent_id: str, new_status: str):
    """Update order status based on Stripe webhook event."""
    from orders.models import Order
    updated = Order.objects.filter(
        stripe_payment_intent=payment_intent_id
    ).update(status=new_status)
    logger.info(f'Updated {updated} orders to status={new_status} for PI={payment_intent_id}')
