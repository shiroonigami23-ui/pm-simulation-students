const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// POST /api/checkout/session
// Creates a Stripe Checkout session for cart items.
// 
// ISSUE: This code uses the Stripe Node.js SDK v2 callback-style API.
// The `stripe.charges.create()` call below uses the legacy Charges API,
// which does NOT support 3D Secure / SCA (required in EU after Sept 2019).
// The current SDK (v12+) uses Payment Intents. This code will fail at runtime
// because stripe@2 is not compatible with Node 18's module system.
//
// SRS FR-05 says: "use the latest Stripe SDK for PCI-compliant checkout."
// Upgrading to stripe@12+ requires a full rewrite of the checkout flow.
//
router.post('/charge', (req, res) => {
  const { amount, currency, source, description } = req.body;

  // Stripe v2 style — legacy Charges API
  stripe.charges.create({
    amount:      Math.round(amount * 100),  // cents
    currency:    currency || 'usd',
    source:      source,                     // card token from frontend
    description: description || 'VueShop purchase',
  }, (err, charge) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ success: true, chargeId: charge.id });
  });
});

router.post('/session', async (req, res) => {
  // TODO: migrate to Payment Intents API (stripe v12+)
  // This endpoint is a stub — the charge route above is used for now
  res.status(501).json({ error: 'Not implemented — see /charge endpoint' });
});

module.exports = router;
