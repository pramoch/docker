##### BUILD #####
FROM node:alpine AS builder

WORKDIR /app

# Install dependencies first
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i

COPY ./ ./

RUN npm run build

##### RUN #####
FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html