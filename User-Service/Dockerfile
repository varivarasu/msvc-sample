FROM node:8-alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]