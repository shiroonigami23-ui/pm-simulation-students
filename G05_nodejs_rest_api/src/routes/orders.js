const router = require('express').Router();
const auth   = require('../middleware/auth');
// TODO: implement order creation, listing, and status update endpoints
router.get('/', auth, (req,res) => res.json({ message: 'Orders endpoint — not yet implemented' }));
module.exports = router;
