# syntax=docker/dockerfile:1

FROM composer:2 AS vendor

WORKDIR /app

COPY composer.json composer.lock* ./

RUN composer install \
    --no-dev \
    --no-interaction \
    --no-scripts \
    --prefer-dist \
    --optimize-autoloader \
    && composer clear-cache

FROM php:8.3-fpm-alpine AS runtime

RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install -j"$(nproc)" pdo_pgsql opcache \
    && apk del postgresql-dev \
    && rm -rf /tmp/* /var/cache/apk/*

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY docker/php/opcache.ini "$PHP_INI_DIR/conf.d/opcache.ini"
COPY docker/php/www.conf /usr/local/etc/php-fpm.d/zz-docker.conf

WORKDIR /var/www/html

COPY --from=vendor /app/vendor ./vendor
COPY public ./public
COPY src ./src
COPY composer.json ./

RUN chown -R www-data:www-data /var/www/html

USER www-data

EXPOSE 9000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD pgrep php-fpm > /dev/null || exit 1
