FROM nginx

RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install nodejs -y
# RUN mkdir /bcc
# Run chmod 755 /bcc
# WORKDIR /bcc
# COPY . /bcc
COPY nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN npm install
EXPOSE 8080
RUN service nginx start
CMD node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js
