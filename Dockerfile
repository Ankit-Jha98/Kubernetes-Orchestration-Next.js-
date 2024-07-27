FROM node:20 AS builder

WORKDIR /myapp

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20

WORKDIR /myapp

COPY --from=builder /myapp ./

EXPOSE 3000

CMD [ "npm", "start" ]
