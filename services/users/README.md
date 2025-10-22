# Users Service

A TypeScript Node.js microservice demonstrating CRUD operations using TypeORM and Postgres.

Endpoints:
- GET /api/users
- POST /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id

Local dev:
- Set DATABASE_URL to a Postgres instance (docker-compose provides one)
- npm ci && npm run dev

Run locally (docker-compose):

1. From repo root: bash scripts/setup-local.sh
2. Start dev server for users service only:
	 cd services/users && npm ci && npm run dev

Run tests:
	cd services/users && npm ci && npm test

Run e2e test locally (in-memory sqlite):
	cd services/users && npm run test:e2e

WebSocket realtime demo:
 - connect socket.io client to http://localhost:3001 and emit 'echo' events

TODO: Install dependencies with npm install to get type definitions locally.
