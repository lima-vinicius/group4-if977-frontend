FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY client.js .

RUN npm install

RUN npm build

EXPOSE 6811

CMD ["node", "client"]