# Terraform

This folder contains Terraform modules and environment examples for CloudDevOpsHub.

Quickstart

1. Install Terraform (>=1.2)
2. Configure AWS credentials via environment variables or AWS CLI
3. Initialize Terraform in this folder:
   - terraform init
4. Validate plan:
   - terraform plan -var-file=envs/dev.tfvars
5. Apply (be careful - this will create cloud resources):
   - terraform apply -var-file=envs/dev.tfvars

Notes

- Replace values in `envs/dev.tfvars` such as `frontend_bucket` and `db_password` with secure values.
- The modules included are:
  - modules/network — example VPC and subnets
  - modules/s3 — S3 bucket for frontend assets
  - modules/rds — RDS Postgres example
  - modules/iam — IAM role example
  - modules/secrets — AWS Secrets Manager example

Security

- For production, do not store secrets in tfvars files. Use environment variables, Vault, or the AWS Secrets Manager provider.
- Always review IAM roles and policies before applying.
