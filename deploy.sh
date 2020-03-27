#!/usr/bin/env sh

# abort on errors
set -e

# delete docs directory if exists
rm -r docs

# build
npm run build

# rename dist folder to docs
mv dist docs

# add files
git add -A

# commit deploy with no lint fix
git commit -m 'updated live version' --no-verify

# push to git master branch
git push -u origin master

cd -