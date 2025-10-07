#! /bin/sh

set -e

exit_code=0
docker compose up -d --wait
yarn run || exit_code=$?
docker compose down
exit $exit_code
