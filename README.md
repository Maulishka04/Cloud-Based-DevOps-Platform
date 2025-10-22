<div align="center">

# ☁️ CloudDevOpsHub

### *Enterprise-Grade Cloud-Native DevOps Platform*

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/actions/workflows/ci.yml/badge.svg)](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/actions/workflows/ci.yml)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688.svg?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-1.28-326CE5.svg?logo=kubernetes)](https://kubernetes.io/)
[![Terraform](https://img.shields.io/badge/Terraform-1.6-7B42BC.svg?logo=terraform)](https://www.terraform.io/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900.svg?logo=amazon-aws)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg?logo=docker)](https://www.docker.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**A comprehensive, production-ready cloud platform showcasing modern DevOps practices, microservices architecture, and full-stack development excellence.**

[Features](#-features) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack)

---

</div>

## 🌟 Overview

**CloudDevOpsHub** is a full-featured, cloud-native platform demonstrating enterprise-level DevOps practices, microservices architecture, and modern infrastructure automation. Built as a comprehensive capstone project, it showcases real-world patterns for scalable, secure, and maintainable cloud applications.

### 💡 What Makes This Special

- 🎯 **Production-Ready Architecture**: Real-world patterns for microservices, not toy examples
- 🔒 **Security-First Design**: AWS Secrets Manager, IAM best practices, and secure defaults
- 🚀 **Complete CI/CD Pipeline**: Automated testing, building, and multi-environment deployment
- 📊 **Observability Built-In**: Logging, monitoring, and health checks from day one
- 🧪 **Test Coverage**: Unit, integration, and E2E tests for all services
- 📚 **Comprehensive Documentation**: Architecture diagrams, runbooks, and deployment guides
- 🎨 **Modern UI/UX**: Progressive Web App with offline support and real-time features

---

## ✨ Features

### 🏗️ Infrastructure & DevOps

- **Infrastructure as Code (IaC)**: Terraform modules for AWS (VPC, RDS, S3, IAM, Secrets Manager)
- **Container Orchestration**: Kubernetes with Helm charts, HPA, and Ingress
- **Multi-Environment Support**: Dev, Staging, and Production configurations
- **CI/CD Automation**: GitHub Actions workflows with automated testing and deployment
- **Blue-Green Deployment**: Zero-downtime deployment strategies
- **Local Development**: Docker Compose setup for rapid local testing

### 🎯 Backend Services

#### Users Service (Node.js + TypeScript)
- RESTful API with Express.js
- PostgreSQL with TypeORM
- JWT authentication foundation
- Real-time communication via Socket.IO
- Comprehensive test suite (Jest + Supertest)
- OpenAPI/Swagger documentation

#### ML Service (Python + FastAPI)
- Machine Learning inference endpoints
- Model training pipeline with scikit-learn
- Model versioning and artifact management
- Async API with FastAPI
- Interactive API documentation (Swagger UI)

### 🎨 Frontend

- **React 18** with TypeScript
- **Progressive Web App (PWA)**: Offline support, service worker caching
- **Real-time Dashboard**: WebSocket integration for live updates
- **State Management**: Zustand for efficient state handling
- **Data Visualization**: Recharts for beautiful charts
- **Responsive Design**: Mobile-first CSS

### 🔐 Security Features

- AWS Secrets Manager integration
- IAM roles with least privilege principle
- Environment-based configuration
- No hardcoded credentials
- Security policy and best practices guide

---

## 🏛️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         AWS Cloud                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    EKS Cluster                           │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │   │
│  │  │              │  │              │  │              │   │   │
│  │  │ Users Service│  │  ML Service  │  │   Frontend   │   │   │
│  │  │  (Node.js)   │  │  (Python)    │  │   (React)    │   │   │
│  │  │              │  │              │  │              │   │   │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘   │   │
│  │         │                 │                 │           │   │
│  └─────────┼─────────────────┼─────────────────┼───────────┘   │
│            │                 │                 │               │
│     ┌──────▼──────┐   ┌──────▼──────┐   ┌─────▼─────┐         │
│     │  RDS        │   │   S3        │   │  Secrets  │         │
│     │ PostgreSQL  │   │  Storage    │   │  Manager  │         │
│     └─────────────┘   └─────────────┘   └───────────┘         │
└─────────────────────────────────────────────────────────────────┘

         ▲                                         ▲
         │                                         │
    ┌────┴────────┐                          ┌────┴────────┐
    │   GitHub    │                          │    Helm     │
    │   Actions   │                          │   Charts    │
    │   (CI/CD)   │                          │   Deploy    │
    └─────────────┘                          └─────────────┘
```

### 📂 Project Structure

```
CloudDevOpsHub/
├── 🏗️  infra/
│   └── terraform/          # IaC modules (VPC, RDS, S3, IAM, Secrets)
├── ☸️  k8s/
│   ├── charts/             # Helm charts for each service
│   └── blue-green/         # Deployment strategies
├── 🔧 services/
│   ├── users/              # Node.js TypeScript microservice
│   │   ├── src/
│   │   │   ├── entities/   # TypeORM models
│   │   │   ├── routes/     # API endpoints
│   │   │   ├── services/   # Business logic
│   │   │   ├── auth/       # JWT utilities
│   │   │   └── __tests__/  # Unit & E2E tests
│   │   ├── Dockerfile
│   │   └── openapi.yaml
│   └── ml-service/         # Python FastAPI ML service
│       ├── app/
│       ├── ml/             # Training & evaluation
│       ├── models/         # Saved model artifacts
│       └── tests/
├── 🎨 frontend/
│   ├── src/
│   │   ├── pages/          # React pages
│   │   ├── store/          # Zustand state
│   │   └── styles.css
│   ├── public/
│   │   ├── manifest.json   # PWA manifest
│   │   └── sw.js           # Service worker
│   └── vite.config.ts
├── 🔄 .github/
│   └── workflows/          # CI/CD pipelines
│       ├── ci.yml          # Test & build
│       ├── cd-dev.yml      # Deploy to dev
│       └── cd-prod.yml     # Deploy to prod
├── 📚 docs/
│   ├── architecture.md     # System architecture
│   ├── deployment-guides.md
│   ├── runbook.md
│   └── system_design.md
├── 🛠️  scripts/
│   ├── setup-local.sh      # Local dev setup
│   ├── deploy-dev.sh       # Dev deployment
│   └── teardown-dev.sh     # Cleanup
├── 🔐 SECURITY.md          # Security best practices
├── 📋 README.md            # This file
└── 🐳 docker-compose.dev.yml  # Local development
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | ≥ 18.0 | Backend services & frontend |
| **Python** | ≥ 3.10 | ML service |
| **Docker** | ≥ 24.0 | Containerization |
| **Docker Compose** | ≥ 2.0 | Local orchestration |
| **Terraform** | ≥ 1.6 | Infrastructure provisioning |
| **kubectl** | ≥ 1.28 | Kubernetes management |
| **Helm** | ≥ 3.12 | Kubernetes deployments |
| **AWS CLI** | ≥ 2.0 | AWS operations |
| **Git** | Latest | Version control |

### 🏃 Running Locally (5 Minutes)

#### Option 1: Using Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/Maulishka04/Cloud-Based-DevOps-Platform.git
cd Cloud-Based-DevOps-Platform

# Start all services
docker-compose -f docker-compose.dev.yml up -d

# Verify services are healthy
curl http://localhost:3001/health  # Users Service
curl http://localhost:8001/health  # ML Service
open http://localhost:5173         # Frontend PWA
```

#### Option 2: Running Services Individually

**Users Service:**
```bash
cd services/users
cp .env.example .env
npm install
npm run dev
# Service available at http://localhost:3001
```

**ML Service:**
```bash
cd services/ml-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python ml/train.py
uvicorn app.main:app --reload --port 8001
# API docs at http://localhost:8001/docs
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
# App available at http://localhost:5173
```

### 🎯 Verify Your Setup

Run the verification checklist:

```bash
# Check Users API
curl http://localhost:3001/api/users

# Check ML prediction
curl -X POST http://localhost:8001/predict \
  -H "Content-Type: application/json" \
  -d '{"features": [50.0, 49.0]}'

# Run tests
cd services/users && npm test
cd ../ml-service && pytest
```

✅ If all services respond, you're ready to go!

---

## 🧪 Testing

### Backend Tests

```bash
# Users Service (Node.js)
cd services/users
npm test              # Unit tests
npm run test:e2e      # E2E tests
npm run test:coverage # Coverage report

# ML Service (Python)
cd services/ml-service
pytest                # All tests
pytest --cov          # With coverage
```

### Frontend Tests

```bash
cd frontend
npm test              # Vitest unit tests
npm run test:ui       # Interactive test UI
```

---

## ☁️ Cloud Deployment

### 🔧 Infrastructure Setup

1. **Configure AWS Credentials:**
   ```bash
   aws configure
   export AWS_PROFILE=your-profile
   ```

2. **Initialize Terraform:**
   ```bash
   cd infra/terraform
   terraform init
   ```

3. **Create Environment Config:**
   ```bash
   cp envs/dev.tfvars envs/dev-actual.tfvars
   # Edit dev-actual.tfvars with your values (DON'T commit this!)
   ```

4. **Deploy Infrastructure:**
   ```bash
   terraform plan -var-file=envs/dev-actual.tfvars
   terraform apply -var-file=envs/dev-actual.tfvars
   ```

### 🚢 Deploy Services to Kubernetes

1. **Configure kubectl:**
   ```bash
   aws eks update-kubeconfig --region us-east-1 --name your-cluster
   ```

2. **Deploy with Helm:**
   ```bash
   # Users Service
   helm upgrade --install users-service k8s/charts/users-service \
     --namespace dev --create-namespace

   # ML Service
   helm upgrade --install ml-service k8s/charts/ml-service \
     --namespace dev
   ```

3. **Verify Deployment:**
   ```bash
   kubectl get pods -n dev
   kubectl get services -n dev
   kubectl get ingress -n dev
   ```

### 🔄 CI/CD Pipeline

The project includes GitHub Actions workflows for automated deployment:

1. **Set up GitHub Secrets** (see `SECURITY.md` and `ci/secrets_example.md`)
2. **Push to branch:**
   - `main` → Triggers CI (test & build)
   - `develop` → Deploys to dev environment
   - Manual trigger → Deploy to production (requires approval)

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/architecture.md) | System design and component interaction |
| [Deployment Guide](docs/deployment-guides.md) | Step-by-step deployment instructions |
| [Runbook](docs/runbook.md) | Operational procedures and troubleshooting |
| [System Design](docs/system_design.md) | Technical decisions and trade-offs |
| [Security Policy](SECURITY.md) | Security best practices and guidelines |
| [API Documentation](services/users/openapi.yaml) | OpenAPI specification |
| [Local Demo Checklist](docs/LOCAL_DEMO_CHECKLIST.md) | Verification steps |

---

## 🛠️ Tech Stack

### Backend

| Technology | Purpose |
|------------|---------|
| **Node.js + TypeScript** | Users service runtime |
| **Express.js** | Web framework |
| **TypeORM** | Database ORM |
| **PostgreSQL** | Relational database |
| **Socket.IO** | Real-time communication |
| **Python 3.10** | ML service runtime |
| **FastAPI** | High-performance API framework |
| **scikit-learn** | Machine learning |
| **Uvicorn** | ASGI server |

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool |
| **Zustand** | State management |
| **Recharts** | Data visualization |
| **Socket.IO Client** | WebSocket connection |

### Infrastructure & DevOps

| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **Kubernetes** | Container orchestration |
| **Helm** | Kubernetes package manager |
| **Terraform** | Infrastructure as Code |
| **AWS (EKS, RDS, S3, IAM)** | Cloud platform |
| **GitHub Actions** | CI/CD automation |
| **Jest** | JavaScript testing |
| **Pytest** | Python testing |

---

## 🔒 Security Considerations

⚠️ **IMPORTANT**: This repository contains **placeholder values** for demonstration purposes.

Before deploying to production:

1. ✅ Read the [Security Policy](SECURITY.md)
2. ✅ Replace all `REPLACE_ME` values
3. ✅ Use AWS Secrets Manager for credentials
4. ✅ Configure GitHub Secrets for CI/CD
5. ✅ Enable MFA on AWS accounts
6. ✅ Review IAM policies
7. ✅ Run security scans (`npm audit`, `pip audit`)
8. ✅ Enable CloudTrail and VPC Flow Logs

**Never commit:**
- `.env` files with real secrets
- `*.tfvars` files with actual credentials
- AWS keys or certificates
- Database passwords

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- ✅ Tests pass (`npm test`, `pytest`)
- ✅ Code follows style guidelines
- ✅ Documentation is updated
- ✅ No secrets in commits

---

## 📈 Roadmap

- [ ] Add authentication service with OAuth2
- [ ] Implement distributed tracing (Jaeger)
- [ ] Add Prometheus + Grafana monitoring
- [ ] Create load testing suite
- [ ] Add API Gateway (Kong/NGINX)
- [ ] Implement event-driven architecture (Kafka)
- [ ] Add GraphQL API layer
- [ ] Multi-region deployment support
- [ ] Chaos engineering tests

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Built with modern DevOps best practices, inspired by:
- AWS Well-Architected Framework
- The Twelve-Factor App
- Kubernetes Best Practices
- CNCF Landscape

---

## 📞 Support

- 📧 Open an [Issue](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/issues) for bugs or feature requests
- 💬 Start a [Discussion](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/discussions) for questions
- ⭐ Star this repo if you find it helpful!

---

<div align="center">

**Made with ❤️ using modern DevOps practices**

[![GitHub Stars](https://img.shields.io/github/stars/Maulishka04/Cloud-Based-DevOps-Platform?style=social)](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Maulishka04/Cloud-Based-DevOps-Platform?style=social)](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/Maulishka04/Cloud-Based-DevOps-Platform?style=social)](https://github.com/Maulishka04/Cloud-Based-DevOps-Platform/watchers)

</div>
