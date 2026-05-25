#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"

minify_one() {
  local src="$1" out="$2"
  npx --yes terser "$src" -c -m -o "$out"
}

minify_one "$root/GCBQH1F/coords.src.js" "$root/GCBQH1F/coords.js"
minify_one "$root/GCBQH1F/ra3QptH7UFk.src.js" "$root/GCBQH1F/ra3QptH7UFk.js"
