#!/usr/bin/env bash

set -euo pipefail

branch_name="${1:?branch name is required}"

if git diff --quiet; then
  echo "changes_made=0" >> "${GITHUB_OUTPUT}"
  echo "No changes detected"
  exit 0
fi

git config user.email "github-actions[bot]@users.noreply.github.com"
git config user.name "github-actions[bot]"
git checkout -B "${branch_name}"
git add -A
git commit -m "chore(proto): update generated SDK with latest Permify definitions"

{
  echo "changes_made=1"
  echo "branch_name=${branch_name}"
} >> "${GITHUB_OUTPUT}"
