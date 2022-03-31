FROM node:10-alpine

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

USER node

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]
