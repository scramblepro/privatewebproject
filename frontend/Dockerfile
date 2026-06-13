# syntax=docker/dockerfile:1

FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY public ./public
COPY src ./src
COPY tsconfig.json tailwind.config.js postcss.config.js ./

ARG REACT_APP_API_BASE_URL=
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV CI=true

RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1
