# Local demo acceptance checklist

1) Install Docker and Docker Compose
2) From repo root run:
   - bash scripts/setup-local.sh
3) Expected results:
   - Postgres available on 5432
   - MongoDB on 27017
   - Users service on http://localhost:3001 with /health returning {status: "ok"}
   - ML service on http://localhost:8001/docs and /health shows model_loaded false unless you run train.py
4) Run tests:
   - cd services/users && npm ci && npm test

Notes:
- Replace DB connection strings for cloud deployments and secure secrets via AWS Secrets Manager and GitHub Secrets.
