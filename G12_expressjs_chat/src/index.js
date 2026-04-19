require('dotenv').config();
const express  = require('express');
const http     = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors     = require('cors');
const path     = require('path');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: '*' } });

app.use(cors()); app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/chatflow')
  .then(() => console.log('MongoDB connected'))
  .catch(e  => console.error('DB error:', e.message));

app.use('/api/auth',     require('./routes/auth'));
app.use('/api/messages', require('./routes/messages'));

const setupChatHandlers = require('./socket/chatHandler');
setupChatHandlers(io);

server.listen(process.env.PORT || 3001, () => console.log('ChatFlow on :3001'));
