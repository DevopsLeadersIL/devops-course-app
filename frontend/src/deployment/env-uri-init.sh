#!/bin/bash

echo replace PLACEHOLDER_URL with $REACT_APP_BACKEND_URL

find '/usr/share/nginx/html/static/js' -name '*.js' -exec sed -i 's,http://localhost:3000,'"${REACT_APP_BACKEND_URL}"',g' {} \;

echo starting server
nginx -g "daemon off;"
