# TaskFlow — React Task Manager

## Tech Stack
- React 18 + Vite (frontend)
- Express.js + Node 18 (backend)
- MongoDB (database)
- Redis caching layer (see FR-05 in SRS)

## Setup
```bash
# Frontend
npm install
npm run dev

# Backend
cd server && npm install && node index.js
```

## Environment
Copy `.env.example` to `.env` and configure values before running.

## Project Structure
```
src/              React frontend
server/           Express backend
server/models/    Mongoose schemas
server/routes/    API route handlers
```
