# Use an official Node.js runtime as the base image
FROM  node:18-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./


RUN rm -rf node_modules

RUN npm cache clean --force

RUN npm config set registry 'https://registry.npmjs.org/'

RUN npm install


# Copy the app source code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that your React app will run on
EXPOSE 3000

# Start the React app when the container starts
CMD [ "npm", "start" ]