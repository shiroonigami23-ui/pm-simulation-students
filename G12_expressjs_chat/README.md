# ChatFlow — Express.js + Socket.io Chat App

## Tech Stack
- Node.js 18 + Express
- Socket.io 4.x (real-time)
- MongoDB + Mongoose
- JWT auth

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Project Structure
```
src/index.js          Server + Socket.io setup
src/socket/           WebSocket event handlers
src/routes/           REST API routes
src/models/           Mongoose schemas
public/               Frontend client
```
