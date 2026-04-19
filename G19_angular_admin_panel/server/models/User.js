const mongoose = require('mongoose');
const s = new mongoose.Schema({
  name:      {type:String,required:true},
  email:     {type:String,required:true,unique:true,lowercase:true},
  role:      {type:String,enum:['admin','editor','viewer'],default:'viewer'},
  active:    {type:Boolean,default:true},
  createdAt: {type:Date,default:Date.now}
});
module.exports = mongoose.model('User',s);
