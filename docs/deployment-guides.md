# Deployment Guides

This document contains quickstart and deployment steps for dev, staging, and prod.

Dev (local using Docker Compose)

1. Install Docker and Docker Compose
2. From repo root run:
   - bash scripts/setup-local.sh
3. Visit:
   - Users service: http://localhost:3001
   - ML service: http://localhost:8001/docs

Cloud (AWS) - high level

1. Configure AWS credentials and account IDs.
2. Edit `infra/terraform/envs/dev.tfvars` and set required variables (e.g., `aws_region`, `db_password`).
3. terraform init && terraform apply -var-file=envs/dev.tfvars
4. Build and push Docker images to ECR; update Helm values with ECR image URIs.
5. Use Helm to deploy to EKS cluster.

See `infra/terraform/README.md` for module usage and variable descriptions.
