FROM node:12

WORKDIR /usr/app
COPY ./ ./

RUN npm i
CMD ["npm", "start"]
