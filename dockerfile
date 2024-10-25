FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
# More verbose npm install
RUN npm install --verbose
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
