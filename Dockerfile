FROM node:20-alpine as builder

RUN mkdir app
WORKDIR app

COPY package*.json ./
RUN npm i -g pnpm@8.5.1
RUN pnpm install


COPY . ./
RUN pnpm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 3000
ENTRYPOINT ["pnpm", "start"]
