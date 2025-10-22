# Blue-Green deployment guide (example)

This guide shows a simple pattern to perform blue-green deployments using labels and Ingress rewrites.

Concept:
- Deploy two separate deployments (users-service-blue and users-service-green) with identical service selectors.
- Control which deployment receives traffic by updating the Ingress backend service or by switching a Service selector.

Example steps:

1. Deploy green and blue replicas with labels:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: users-service-blue
spec:
  selector:
    matchLabels:
      app: users-service
      track: blue
  template:
    metadata:
      labels:
        app: users-service
        track: blue
    spec:
      containers:
      - name: users
        image: REPLACE
```

2. Create two services that point to each track, or use a single service and update its selector:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: users-service
spec:
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: users-service
    track: blue   # switch to green when ready
```

3. To switch traffic:
- Change the Service selector to `track: green` and apply. This switches traffic instantly.
- Or update the Ingress backend to point to a different service.

4. Validate in staging by pointing ingress host to staging environment and testing health endpoints.

5. Rollback:
- Switch selector back to the previous track, or update Ingress back.

Notes:
- For production-grade traffic shifting, use Istio/Linkerd or an ingress controller that supports canary annotations (NGINX or Traefik) or use AWS ALB with weights.
- Consider session affinity and DB migrations before switching traffic.
