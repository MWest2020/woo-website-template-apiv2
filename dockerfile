FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Display the content of the directory
RUN ls -la

# Install dependencies
RUN npm ci --only=production --no-audit --no-fund

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
