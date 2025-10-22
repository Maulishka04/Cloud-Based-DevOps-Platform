# CI/CD Secrets Example

List of GitHub repository secrets used by the workflows and a short description:

- AWS_REGION: AWS region (e.g., us-east-1)
- AWS_ACCOUNT_ID: AWS account id
- AWS_ACCESS_KEY_ID: Access key for a user with ECR/EKS permissions
- AWS_SECRET_ACCESS_KEY: Secret for the access key
- ECR_USERS_REPO: ECR repo name for users service
- ECR_ML_REPO: ECR repo name for ml service
- EKS_CLUSTER_DEV: name of dev EKS cluster
- EKS_CLUSTER_PROD: name of prod EKS cluster
- GITHUB_TOKEN: provided by GitHub automatically; used for approvals and API calls

Security note: Create a dedicated IAM user or role for CI with least privilege (only ECR push, EKS update-kubeconfig, and S3 access as needed). Use OIDC where possible to avoid long-lived keys.
