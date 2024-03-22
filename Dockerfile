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

EXPOSE 3000

CMD ["npm", "start"]