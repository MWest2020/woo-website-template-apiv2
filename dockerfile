FROM node:16-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with more verbose output and increased memory
RUN npm install --verbose --unsafe-perm=true --allow-root

# Copy the rest of the application
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
