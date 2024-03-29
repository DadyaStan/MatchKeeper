FROM node

WORKDIR /app/frontend

EXPOSE 8080

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]