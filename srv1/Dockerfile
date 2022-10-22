FROM node:16-alpine

# Create app directory
WORKDIR /opt/srv1

COPY package*.json ./

RUN ls -la

RUN npm ci

COPY srv1/index.js ./

# ENV URL=http://host.docker.internal:8082

EXPOSE 8081
CMD [ "node", "index.js" ]
