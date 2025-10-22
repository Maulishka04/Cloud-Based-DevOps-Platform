# CloudDevOpsHub - Architecture

Overview

CloudDevOpsHub is designed as a modular platform demonstrating modern cloud-native, DevOps, and ML practices. Key components:

- Frontend: React PWA that serves dashboards and real-time collaboration via WebSocket.
- Backend microservices: Node.js (TypeScript) microservices for core APIs (auth, users, orders), and a Python FastAPI ML service serving models.
- Datastores: PostgreSQL (relational), MongoDB (document), Neo4j (graph demo - optional container).
- Infra: Terraform modules to provision S3, RDS, ECR, IAM roles, and networking skeleton.
- Container orchestration: Kubernetes (EKS) with Helm charts for deployment and canary/blue-green examples.
- CI/CD: GitHub Actions workflows for CI (lint/test/build) and CD (deploy to dev/prod with approvals).
- Monitoring: CloudWatch integration points and example ELK stack for log aggregation.

Design principles

- Infrastructure as code (Terraform) with environment-specific variable files.
- Containerized services for portability and consistency.
- Secure defaults: secrets stored in AWS Secrets Manager and injected into K8s as needed.
- Observability: health checks, metrics endpoints, and logging to CloudWatch.

TODOs
- Add full Terraform network (VPC/subnets) and security group rules for production.
- Integrate Neo4j demo and MLflow tracking server.
