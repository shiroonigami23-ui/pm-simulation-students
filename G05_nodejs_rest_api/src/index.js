require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
app.use(cors()); app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shopapi')
  .then(() => console.log('MongoDB connected'))
  .catch(e  => console.error('DB error:', e.message));

app.use('/api/auth',     require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders',   require('./routes/orders'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`ShopAPI running on :${PORT}`));
