const router  = require('express').Router();
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');

router.post('/register', async (req,res) => {
  try {
    const {username,email,password} = req.body;
    if (await User.findOne({email})) return res.status(409).json({error:'Email in use'});
    const u = await new User({username,email,password}).save();
    const token = jwt.sign({id:u._id,username:u.username}, process.env.JWT_SECRET||'dev', {expiresIn:'7d'});
    res.status(201).json({token, user:{id:u._id,username,email}});
  } catch(e) { res.status(400).json({error:e.message}); }
});

router.post('/login', async (req,res) => {
  try {
    const {email,password} = req.body;
    const u = await User.findOne({email});
    if (!u || !(await u.comparePassword(password))) return res.status(401).json({error:'Invalid credentials'});
    const token = jwt.sign({id:u._id,username:u.username}, process.env.JWT_SECRET||'dev', {expiresIn:'7d'});
    res.json({token, user:{id:u._id,username:u.username}});
  } catch(e) { res.status(500).json({error:e.message}); }
});
module.exports = router;
