# System Design

This document highlights architecture decisions and trade-offs.

Choices & trade-offs

- AWS chosen for broad feature set. EKS for Kubernetes managed control plane.
- Terraform chosen for IaC for vendor neutrality and modularity.
- Node.js (TypeScript) for microservices for fast developer iteration; Python for ML service due to library ecosystem.
- PostgreSQL for transactional data; MongoDB for flexible documents; Neo4j for graph-specific features.

Scalability & cost

- Use HPA and cluster autoscaler for EKS.
- Use spot instances for cost savings where appropriate.
- Terraform variables per environment let you size instances appropriately.

Security

- Use AWS Secrets Manager for secrets; Terraform creates IAM roles with least privilege.

Next steps

- Implement full VPC, private subnets, and NAT gateways.
- Add centralized logging (ELK) and APM.
