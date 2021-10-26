FROM node:16-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5500

CMD ["yarn", "dev"]
