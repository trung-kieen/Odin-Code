#!/bin/bash
# Author: Nguyen Khac Trung Kien
# cd ..
# npm tailwindcss -i ./src/styles.css -o ./dist/styles.css
# npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch &
# live-server dist/index.html
npx tailwindcss -i ./src/styles.css -o ./dist/styles.css --watch  &
npm run start  &
chromium dist/index.html  &



