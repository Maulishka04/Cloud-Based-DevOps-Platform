# Makefile - common tasks

.PHONY: setup-local build-images test lint fmt

setup-local:
	bash scripts/setup-local.sh

build-images:
	docker-compose -f docker-compose.dev.yml build

test:
	cd services/users && npm ci && npm test

lint:
	cd services/users && npm run lint

fmt:
	cd services/users && npm run format
