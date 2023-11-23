# BASE
FROM node:latest AS base

WORKDIR /app

COPY front/package.json .
COPY front/package-lock.json .

COPY . .
EXPOSE 3001

# DEVELOPMENT
FROM base AS dev

RUN npm install

CMD ["npm", "start"]