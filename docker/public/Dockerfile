# Pull nginx base image
FROM nginx:latest

RUN rm -v /etc/nginx/nginx.conf

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static assets into var/www
COPY . /var/www

# Expost port 80
EXPOSE 90

# Start up nginx server
CMD ["nginx"]
