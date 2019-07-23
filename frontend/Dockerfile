FROM node:10

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
RUN npm run-script build
RUN npm i -g pm2
RUN npm build

CMD ["pm2-runtime", "start", "node_modules/react-scripts/scripts/start.js", "--name", "front-end"]