const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {type:String,required:true},
  description: String,
  price: {type:Number,required:true},
  stock: {type:Number,default:0},
  category: String,
  image: String,
  stripeProductId: String,  // linked Stripe product
  stripePriceId:   String,  // linked Stripe price
});
module.exports = mongoose.model('Product', schema);
