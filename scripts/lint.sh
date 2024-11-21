#!/usr/bin/env bash
set -e
trap "exit" INT

npx eslint
npx prettier --check .
