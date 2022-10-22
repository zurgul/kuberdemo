FROM node:16-alpine

# Create app directory
WORKDIR /opt/srv2

COPY package*.json ./

RUN ls -la

RUN npm ci

COPY srv2/index.js ./

# ENV URL=http://host.docker.internal:8081

EXPOSE 8082
CMD [ "node", "index.js" ]
