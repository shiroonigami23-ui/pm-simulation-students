const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  roomId:    { type: String, required: true, index: true },
  senderId:  { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  senderName:{ type: String, required: true },
  content:   { type: String, required: true },
  type:      { type: String, enum: ['text','image','system'], default: 'text' },
  readBy:    [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Message', messageSchema);
