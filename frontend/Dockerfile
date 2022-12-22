# stage1 as builder
FROM node:14.18-alpine3.15 as builder
WORKDIR /react-ui
# copy the package.json to install dependencies
COPY package.json ./
# Install the dependencies and make the folder
RUN npm install
COPY . .
RUN  apk add dos2unix --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted
RUN dos2unix  /react-ui/src/deployment/env-uri-init.sh
# Build the project and copy the files
RUN npm run build


FROM nginx:alpine
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html
COPY --from=builder /react-ui/src/deployment /tmp/deployment
EXPOSE 80
ENTRYPOINT ["/bin/sh","/tmp/deployment/env-uri-init.sh"]