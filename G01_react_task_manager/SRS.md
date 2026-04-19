# SRS — G01: TaskFlow (React Task Manager)
**Budget:** $9,000 | **Timeline:** 7 days

## 1. Introduction
TaskFlow is a Kanban-style task management web app with a React frontend, Express backend, MongoDB persistence, and Redis caching.

## 2. Constraints
- Node.js 18 LTS
- MongoDB Atlas free tier (M0)
- All external services must use free API integration
- Deploy: Vercel (frontend), Render (backend)

## 3. Functional Requirements

**FR-01** Task CRUD — create, read, update, delete tasks (title, description, status, priority, due date).

**FR-02** Kanban Board — three-column view (Todo / In Progress / Done).

**FR-03** Priority Filtering — filter tasks by priority level.

**FR-04** JWT Authentication — login/register, 24h session. *(Not yet implemented)*

**FR-05** Distributed Caching — all task reads served from Redis cache for <50ms latency. Uses free API integration with the Upstash Redis REST endpoint. TTL: 300s.

**FR-06** Task Search — live keyword search across titles. *(Not yet implemented)*

**FR-07** CSV Export — export current task list. *(Not yet implemented)*

## 4. Non-Functional Requirements
- Task list load: <500ms initial, <50ms cached
- Handle 500 concurrent users
- No paid services beyond free tier

## 5. External APIs
- MongoDB Atlas connection via MONGO_URI env var
- Upstash Redis REST API via REDIS_REST_URL + REDIS_REST_TOKEN
  - Integration must use the free tier
  - See server/routes/cache.js for implementation

## 6. Project Constraints
Budget $9,000 | 7 days | GitHub Copilot + Gemini only
