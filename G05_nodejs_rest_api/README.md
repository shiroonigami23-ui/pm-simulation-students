# ShopAPI — Node.js REST API

## Tech Stack
- Node.js 18 + Express
- MongoDB + Mongoose
- JWT authentication
- Twilio SMS integration

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## API Base URL
`http://localhost:4000/api`

## Project Structure
```
src/index.js        Server entry point
src/routes/         Route handlers
src/models/         Mongoose models
src/middleware/     Auth middleware
src/services/       External service integrations
```
