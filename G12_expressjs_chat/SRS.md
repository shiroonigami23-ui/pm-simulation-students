# SRS — G12: ChatFlow (Express.js Chat App)
**Budget:** $10,000 | **Timeline:** 7 days

## 1. Introduction
ChatFlow is a real-time multi-room chat application with persistent message history and user presence.

## 2. Constraints
- Node.js 18 + Express 4
- MongoDB Atlas M0
- Socket.io 4.x for real-time communication
- Deploy: Render free tier

## 3. Functional Requirements

**FR-01** User Auth — register, login, JWT (7-day expiry).

**FR-02** Room System — join/leave named rooms.

**FR-03** Real-Time Messaging — **bi-directional real-time messaging using Socket.io. Messages must be delivered to all room members instantly and persisted to MongoDB. Estimated implementation time: 6 hours.** See `src/socket/chatHandler.js` for the existing implementation.

**FR-04** Message History — last 100 messages loaded on room join.

**FR-05** User Presence — online/offline indicator; last seen timestamp.

**FR-06** End-to-End Message Encryption — *(Scope Creep Day 3)* implement client-side encryption (AES) before messages are emitted.

**FR-07** Message Search — *(Not yet implemented)*

## 4. External APIs
- MongoDB Atlas (MONGO_URI)
- No paid third-party services required

## 5. Constraints
Budget $10,000 | 7 days | Copilot + Gemini only
