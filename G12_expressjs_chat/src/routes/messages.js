const router  = require('express').Router();
const auth    = require('../middleware/auth');
const Message = require('../models/Message');

router.get('/:roomId', auth, async (req,res) => {
  try {
    const messages = await Message.find({roomId:req.params.roomId}).sort({createdAt:-1}).limit(100);
    res.json(messages.reverse());
  } catch(e) { res.status(500).json({error:e.message}); }
});
module.exports = router;
