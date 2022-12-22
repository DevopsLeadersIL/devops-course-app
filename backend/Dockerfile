##### Build Stage #####
ARG NODE_MAIN_RELEASE=19

FROM node:${NODE_MAIN_RELEASE}-alpine AS downloader

WORKDIR /usr/src/app

COPY . /usr/src/app/


RUN npm install

##### CMD Stage #####
FROM node:${NODE_MAIN_RELEASE}-alpine

WORKDIR /usr/src/app

RUN chown node:node /usr/src/app

RUN apk add --no-cache tini vim
ENTRYPOINT ["/sbin/tini", "--"]


USER node

COPY --from=downloader /usr/src/app/package.json .
COPY --from=downloader /usr/src/app/app.js .
COPY --from=downloader /usr/src/app/public ./public
COPY --from=downloader /usr/src/app/bin ./bin
COPY --from=downloader /usr/src/app/routes ./routes
COPY --from=downloader /usr/src/app/db ./db
COPY --from=downloader /usr/src/app/views ./views
COPY --from=downloader /usr/src/app/node_modules ./node_modules


CMD ["npm", "start"]
