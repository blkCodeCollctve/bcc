FROM kyma/docker-nginx

#Copy over custom nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

COPY . /var/www

CMD 'nginx'
