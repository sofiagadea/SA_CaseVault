# BASE
FROM node:latest AS base

WORKDIR /app

COPY . .
EXPOSE 3001

# DEVELOPMENT
FROM base AS dev

COPY package.json .
COPY package-lock.json .
RUN npm install

CMD ["npm", "start"]