const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors()); app.use(express.json());
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskflow')
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.error(e));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/cache', require('./routes/cache'));
app.listen(process.env.PORT || 5000, () => console.log('Server on :5000'));
