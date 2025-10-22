# Security Policy

## 🔒 Security Best Practices

This project is a **demonstration/portfolio project** and contains placeholder values for educational purposes. If you fork or use this repository, please follow these security guidelines:

### ⚠️ Before Pushing to GitHub

1. **Never commit secrets or credentials**
   - All `.env` files with actual credentials
   - AWS access keys, secret keys, or session tokens
   - Database passwords or connection strings with real credentials
   - JWT secrets, API keys, or private keys
   - SSH keys or certificates

2. **Use environment variables**
   - Store sensitive data in `.env` files (which are gitignored)
   - Use GitHub Secrets for CI/CD workflows
   - Use AWS Secrets Manager or HashiCorp Vault for production

3. **Replace all placeholders**
   - Search for `REPLACE_ME` in the codebase
   - Update Terraform `*.tfvars` files with real values (but don't commit them)
   - Generate strong, unique secrets for JWT, database passwords, etc.

### 🛡️ Security Checklist for Production Use

- [ ] Replace all `REPLACE_ME` placeholders with secure values
- [ ] Enable AWS Secrets Manager for storing database credentials
- [ ] Use IAM roles with least privilege principle
- [ ] Enable MFA for AWS root account and IAM users
- [ ] Set up AWS CloudTrail for audit logging
- [ ] Enable VPC Flow Logs for network monitoring
- [ ] Configure security groups to allow only necessary traffic
- [ ] Use HTTPS/TLS for all external communications
- [ ] Implement rate limiting and DDoS protection
- [ ] Regular security updates for all dependencies (`npm audit`, `pip audit`)
- [ ] Enable Container Image Scanning in ECR
- [ ] Implement proper authentication and authorization in services
- [ ] Use Kubernetes RBAC for cluster access control
- [ ] Enable Pod Security Policies/Standards in Kubernetes
- [ ] Rotate secrets regularly (every 90 days minimum)

### 🔍 Known Placeholder Locations

These files contain `REPLACE_ME` placeholders that **MUST** be replaced:

- `services/users/.env.example` → Copy to `.env` and add real JWT_SECRET
- `infra/terraform/envs/dev.tfvars` → Copy and add real db_password
- `services/users/src/auth/jwt.ts` → Fallback secret (override via env var)

### 📝 GitHub Secrets Required

For CI/CD workflows to work, configure these secrets in your repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_ACCOUNT_ID`
- `ECR_USERS_REPO`
- `ECR_ML_REPO`
- `EKS_CLUSTER_DEV`
- `EKS_CLUSTER_PROD`
- `AWS_ROLE_ARN_DEV`
- `AWS_ROLE_ARN_PROD`

See `ci/secrets_example.md` for details.

### 🐛 Reporting Security Vulnerabilities

If you discover a security vulnerability in this demonstration project, please:

1. **Do not** open a public GitHub issue
2. Email the repository owner privately (check GitHub profile for contact)
3. Include detailed steps to reproduce the vulnerability
4. Allow reasonable time for a fix before public disclosure

### 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [AWS Security Best Practices](https://aws.amazon.com/security/best-practices/)
- [Kubernetes Security](https://kubernetes.io/docs/concepts/security/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

---

**Remember**: This is a portfolio/demonstration project. Always conduct a thorough security review before deploying to production.
