const Message = require('../models/Message');
const User    = require('../models/User');

// Active socket-to-user mapping
// WARNING: This is an in-memory map. In a multi-instance deployment, this breaks.
// Socket IDs are per-server-instance; a message sent to socket A on server 1
// cannot be delivered via server 2. Redis adapter required for horizontal scaling.
const socketUserMap = {};

module.exports = function setupChatHandlers(io) {

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Authenticate via token in handshake
    const token = socket.handshake.auth?.token;
    if (!token) { socket.disconnect(); return; }

    socket.on('join_room', async ({ roomId, userId, username }) => {
      socket.join(roomId);
      socketUserMap[socket.id] = { userId, username, roomId };

      // Mark user online
      await User.findByIdAndUpdate(userId, { online: true });

      // Load message history
      const history = await Message.find({ roomId })
        .sort({ createdAt: -1 }).limit(50).lean();
      socket.emit('message_history', history.reverse());

      // Notify room
      socket.to(roomId).emit('user_joined', { username, roomId });
    });

    socket.on('send_message', async (data) => {
      const { roomId, content, senderId, senderName } = data;

      // RACE CONDITION: message is emitted to room BEFORE it is saved to the database.
      // If the process crashes between the emit and the await save(), the message
      // is displayed in clients' UI but never persisted.
      // On reconnect, the message history will NOT include this message,
      // causing a "ghost message" that disappears after page refresh.
      //
      // Fix requires: either (a) save first, emit after (adds latency), or
      // (b) optimistic UI with server-side acknowledgment + client-side rollback.
      // Estimated fix time: 2-3 days (design decision + implementation + testing).

      // Emit FIRST (before DB write — this is the bug)
      io.to(roomId).emit('new_message', {
        content, senderId, senderName, roomId,
        createdAt: new Date(),
        _id: 'temp-' + Date.now(), // temporary ID — will differ from DB _id
      });

      // DB write happens AFTER emit — decoupled, not guaranteed
      try {
        await new Message({ roomId, senderId, senderName, content }).save();
      } catch (err) {
        console.error('[socket] Message save failed:', err.message);
        // Client already saw the message — no rollback mechanism exists
      }
    });

    // Missing: reconnect handling
    // When a client briefly disconnects and reconnects, there is no mechanism to
    // replay missed messages. The client receives message_history on join,
    // but messages sent DURING the disconnect window are not retransmitted.
    // TODO: implement lastSeenMessageId + message replay on reconnect

    socket.on('disconnect', async () => {
      const user = socketUserMap[socket.id];
      if (user) {
        delete socketUserMap[socket.id];
        await User.findByIdAndUpdate(user.userId, { online: false, lastSeen: new Date() });
        io.to(user.roomId).emit('user_left', { username: user.username });
      }
    });
  });
};
