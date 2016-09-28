#!/bin/bash
npm run test
npm run build:bundle
cp ./dist/js/fe-co-pacman-fe.js ./dist/pacman-fe.js
cp ./dist/css/fe-co-pacman-fe.css ./dist/pacman-fe.css

echo ''
echo '----------------------------------'
now=$(date +"%T")
echo "Current time : $now"
echo ''
