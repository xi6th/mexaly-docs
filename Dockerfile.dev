# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Install dependencies needed for development
RUN apk add --no-cache libc6-compat python3 make g++

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# The source code will be mounted at runtime via volumes in docker-compose.yml
# This ensures we're always using the latest local files

EXPOSE 9008

# Command will be overridden in docker-compose.yml
CMD ["npm", "run", "dev"]