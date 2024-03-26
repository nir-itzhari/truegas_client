# Inherit current image from an alpine image containing node (for latest versions use node:alpine):
FROM node:18-alpine3.15

# Create an empty directory inside the container for project files and set it as the container's Current Directory:
WORKDIR /app

# Copy local package.json & package-lock.json into container's WORKDIR (last dot):
COPY package*.json /app

# Install npm dependencies & devDependencies:
RUN npm i

# Copy project local files (first dot) into container's WORKDIR (last dot):
COPY . /app

# Build the React app for production
RUN npm run build

# Expose the port that your React app will run on
EXPOSE 3000

# Start the React app when the container starts
CMD ["npm", "start"]