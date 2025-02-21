# Gulp

https://octopicsus.github.io/js16/dist/

## Description
This project uses Gulp to automate frontend development tasks, such as compiling SCSS to CSS, minifying, and bundling JavaScript with Webpack and Babel.

## Installation

### 1. Install **Node.js** and **npm**
To work with this project, you need to install [Node.js](https://nodejs.org/), which will automatically install **npm** (the package manager for JavaScript).

### 2. Install dependencies
Navigate to the root folder of the project and install all necessary packages using **npm**:

npm install

This will install all dependencies listed in package.json, including Gulp and its plugins.

### 3. Install Gulp globally (if not installed)
If Gulp is not installed on your machine, install it globally:

npm install --global gulp-cli

### 4. Run the project
To run the project, execute the following command:

npm run build

This command will run Gulp and perform tasks such as copying HTML, compiling SCSS to CSS, and bundling JavaScript using Webpack.

#### Project Structure
src/ - Source files of the project
src/js/ - JavaScript files
src/scss/ - SCSS files
src/ - HTML files
dist/ - Final build (files for deployment)

## Gulp Plugins and Their Installation

### 1. gulp-sass
A plugin for compiling SCSS to CSS.

npm install --save-dev gulp-sass

## 2. gulp-sourcemaps
A plugin for generating source maps, allowing you to debug the compiled code.

npm install --save-dev gulp-sourcemaps

## 3. gulp-plumber
A plugin to prevent Gulp from stopping due to errors during the build process.

npm install --save-dev gulp-plumber

## 4. webpack-stream
A plugin to integrate Webpack with Gulp, allowing you to use Webpack for JavaScript bundling and minification.

npm install --save-dev webpack-stream

## 5. babel-loader
A Babel loader for Webpack, used to compile ES6+ code to ES5.

npm install --save-dev babel-loader @babel/core @babel/preset-env

## 6. webpack
The main tool for bundling and minifying JavaScript.

npm install --save-dev webpack webpack-cli