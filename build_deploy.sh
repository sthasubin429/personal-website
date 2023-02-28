#!/bin/sh

pwd
ls

# delete dist folder
sudo rm -rf dist/*

# run build command
npm run build

# copy CNAME into dist
cp CNAME dist/
cp robots.txt dist/

echo "Deploying ..."

# run gh-pages deploy command
npm run deploy
