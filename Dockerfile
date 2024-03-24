FROM node:18-alpine3.15

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]