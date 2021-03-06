FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --silent
COPY ./ ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
