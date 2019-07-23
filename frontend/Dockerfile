FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm i -g pm2

CMD ["pm2-runtime", "start", "node_modules/react-scripts/scripts/start.js", "--name", "front-end"]