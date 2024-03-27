# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Update and upgrade packages
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash

# Set the working directory
WORKDIR /app


COPY package*.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .


# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]