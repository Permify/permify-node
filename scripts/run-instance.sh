#! /bin/sh

set -e

ROOT_DIR="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"

exit_code=0
cd "${ROOT_DIR}"

docker compose up -d

for attempt in $(seq 1 60); do
  if nc -z 127.0.0.1 3478 >/dev/null 2>&1; then
    yarn run-test || exit_code=$?
    break
  fi
  sleep 1
done

if [ "${exit_code}" -eq 0 ] && ! nc -z 127.0.0.1 3478 >/dev/null 2>&1; then
  echo "Permify did not become reachable on 127.0.0.1:3478 within 60 seconds." >&2
  exit_code=1
fi

docker compose down
exit $exit_code
