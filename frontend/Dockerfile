##### Build Stage #####
ARG NODE_MAIN_RELEASE=19

FROM node:${NODE_MAIN_RELEASE}-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

CMD ["npm", "start"]
