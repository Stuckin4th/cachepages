#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
npx --yes terser "$root/GCBQH1F/ra3QptH7UFk.src.js" \
  -c -m \
  -o "$root/GCBQH1F/ra3QptH7UFk.js"
