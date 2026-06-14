# syntax=docker/dockerfile:1

FROM php:8.3-fpm-alpine AS build

# Install runtime libs explicitly first so they survive build-deps removal
RUN apk add --no-cache postgresql-libs \
    && apk add --no-cache --virtual .build-deps postgresql-dev \
    && docker-php-ext-install -j"$(nproc)" pdo_pgsql opcache \
    && apk del .build-deps \
    && rm -rf /tmp/* /var/cache/apk/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

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

# Same pattern: keep runtime libs, remove only build deps
RUN apk add --no-cache postgresql-libs \
    && apk add --no-cache --virtual .build-deps postgresql-dev \
    && docker-php-ext-install -j"$(nproc)" pdo_pgsql opcache \
    && apk del .build-deps \
    && rm -rf /tmp/* /var/cache/apk/*

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY docker/php/opcache.ini "$PHP_INI_DIR/conf.d/opcache.ini"
COPY docker/php/www.conf /usr/local/etc/php-fpm.d/zz-docker.conf

WORKDIR /var/www/html

COPY --from=build /app/vendor ./vendor
COPY public ./public
COPY src ./src
COPY composer.json ./

RUN chown -R www-data:www-data /var/www/html

#USER www-data

EXPOSE 9000
ENTRYPOINT ["docker-php-entrypoint"]
CMD ["php-fpm", "-F"]

# HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
#     CMD pgrep php-fpm > /dev/null || exit 1