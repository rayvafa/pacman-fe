#!/bin/bash
npm run test
npm run build:bundle
cp ./dist/js/fe-co-pacman-fe.min.js ./dist/pacman-fe.min.js

echo ''
echo '----------------------------------'
now=$(date +"%T")
echo "Current time : $now"
echo ''
