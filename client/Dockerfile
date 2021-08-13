FROM node:16-alpine

WORKDIR /client

COPY ./package*.json /client/

RUN npm install

COPY . /client/

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]  
