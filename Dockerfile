FROM node:12

WORKDIR /usr/app

# Install dependencies first
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i

COPY ./ ./

CMD ["npm", "start"]
