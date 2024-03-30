# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine3.15


# Update and upgrade packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash

# Set the working directory
WORKDIR /app

COPY package*.json  /app

# Install dependencies
RUN npm install

RUN chgrp -R 0 /app && chmod -R g=u /app

# Copy the rest of the application
COPY . /app


# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]