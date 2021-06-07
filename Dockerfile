FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "dist"]
