#!/usr/bin/env bash
set -e
trap "exit" INT

npx eslint . --max-warnings=0
npx prettier --check .
