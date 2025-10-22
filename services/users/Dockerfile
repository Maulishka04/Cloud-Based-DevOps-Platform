# users service Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY src ./src

RUN npm ci
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/index.js"]
