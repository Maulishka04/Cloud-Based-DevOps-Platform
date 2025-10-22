# Runbook

Quick troubleshooting steps

- Service health endpoints:
  - Users: /health
  - ML: /health

- Check logs: docker-compose logs -f or CloudWatch logs for cloud deployments
- Rollback: use Helm to rollback to previous release: `helm rollback RELEASE N`
