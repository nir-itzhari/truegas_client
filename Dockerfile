# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the app source code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that your React app will run on
EXPOSE 3000

# Start the React app when the container starts
CMD [ "npm", "start" ]