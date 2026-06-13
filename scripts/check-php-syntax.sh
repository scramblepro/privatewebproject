#!/bin/sh
set -eu

find backend -name '*.php' \
  ! -path 'backend/vendor/*' \
  ! -path 'backend/node_modules/*' \
  -print \
  -exec php -l {} \;
