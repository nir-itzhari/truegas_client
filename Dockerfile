FROM node:18-alpine

# Install dependencies only when needed
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json yarn.lock

# Rebuild the source code only when needed
WORKDIR /app

COPY . .

RUN yarn build

# Production image, copy all the files and run next
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs


EXPOSE 3000

CMD ["npm", "start"]