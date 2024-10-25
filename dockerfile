FROM node:16 AS builder

WORKDIR /app

COPY package.json ./

# Install production dependencies in batches
RUN npm install --only=production --no-audit --no-fund express
RUN npm install --only=production --no-audit --no-fund react react-dom
# Add more RUN commands for other major dependencies

COPY . .

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]
