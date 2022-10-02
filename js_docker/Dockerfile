FROM node:lts

WORKDIR /task

RUN yarn

COPY package*.json /task
COPY yarn.lock /task

CMD ["yarn","run","node","http-server"]