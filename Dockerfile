FROM node:8.6.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN npm ci --only=production
RUN npm build:prod

COPY ./dist /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
