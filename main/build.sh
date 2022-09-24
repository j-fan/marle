#!/bin/bash

# Strict mode
set -e
set -u
set -o pipefail

# Remove old dist contents
rm -rf dist
mkdir dist

# Copy files into dist
for path in ../*/package.json; do
  subdir="$(basename "${path%/*}")"
  echo
  echo "Processing $subdir"

  if [ "$subdir" == "main" ]; then
    cp -rv "../$subdir/docs/"* "dist/"
    touch dist/.nojekyll
    continue
  fi

  if [ -f "../$subdir/package.json" ]; then
    pushd "../$subdir"
    pnpm install --frozen-lockfile
    pnpm build
    popd
    echo "Finished building $subdir"
    echo
  fi

  cp -rv "../$subdir/docs" "dist/$subdir"
done

for path in ../*/index.html; do
  cp -rv "$(dirname "$path")" dist/
done

echo "Built and copied files successfully"
