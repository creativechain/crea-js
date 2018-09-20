FROM node:4
ADD ./package.json /creajs/package.json
WORKDIR /creajs
RUN npm install
ADD . /creajs
RUN npm test
