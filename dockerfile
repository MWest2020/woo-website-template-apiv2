FROM node:16-alpine AS builder

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./

# Limit memory usage for npm
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm ci --only=production --no-audit --no-fund

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
