#!/bin/bash
# Author: Nguyen Khac Trung Kien
cd ..

# Prepare testing enviroment
npm i jest --save-dev
npm i jest-cli --save-dev
mkdir -p test
mkdir -p src/static/img

# Setup for jest with ESM syntax https://jestjs.io/docs/ecmascript-modules
# TODO: check if work with npm
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript

echo """
module.exports = {
presets: [
[
'@babel/preset-env',
{
  targets: {
  node: 'current',
},
},
],
'@babel/preset-typescript'
],
};
""" > "babel.config.js"

# npm script for test
PACKAGE_JSON="package.json"
jq '.scripts.test = "node --experimental-vm-modules node_modules/jest/bin/jest.js"' "$PACKAGE_JSON" > tmpfile && mv tmpfile "$PACKAGE_JSON"


# React
npm install react react-dom --save-dev

# Setup tailwindcss
npm install -D tailwindcss
npx tailwindcss init
echo """
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [\"./dist/**/*.{html,js}\"],
  theme: {
    extend: {},
  },
  plugins: [require(\"daisyui\")],
};
""" > "tailwind.config.js"


# Daisy ui
npm i -D daisyui@latest

echo """
module.exports = {
//...
plugins: [require("daisyui")],
}
""" >> "tailwind.config.js"



npm install jquery --save-dev
