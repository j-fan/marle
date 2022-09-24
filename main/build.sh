#!/bin/bash

# Strict mode
set -e
set -u
set -o pipefail

# Remove old dist contents
rm -rf dist
mkdir dist

# Copy files into dist
for path in ../*/docs; do
  subdir=$(printf %s "$path" | sed -E 's$.+/(.+)/docs$\1$')

  if [ "$subdir" == "main" ]; then
    cp -rv "$path/"* "dist/"
    touch dist/.nojekyll
    continue
  fi

  if [ -f "../$subdir/package.json" ]; then
    pushd "$path"
    pnpm install --frozen-lockfile
    pnpm build
    popd
    echo "Finished building $subdir"
    echo
  fi

  cp -rv "$path" "dist/$subdir"
done

for path in ../*/index.html; do
  cp -rv "$(dirname "$path")" dist/
done

echo "Built and copied files successfully"
