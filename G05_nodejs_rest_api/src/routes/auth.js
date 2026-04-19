const router   = require('express').Router();
const jwt      = require('jsonwebtoken');
const User     = require('../models/User');
const { sendSMS } = require('../services/smsService');

const sign = (user) => jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET || 'dev-secret',
  { expiresIn: '24h' }
);

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (await User.findOne({ email }))
      return res.status(409).json({ error: 'Email already registered' });

    const user = await new User({ name, email, password, phone }).save();

    // Send welcome SMS if phone number provided
    if (phone) {
      await sendSMS(phone, `Welcome to ShopAPI, ${name}! Your account is ready.`);
    }

    res.status(201).json({ token: sign(user), user: { id: user._id, name, email, role: user.role } });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ token: sign(user), user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
