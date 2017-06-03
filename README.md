# Vymo Website #

This README would document whatever steps are necessary to get your application up and running.

### Summary ###

* This repo contains front end files for the Vymo website.
* This project uses bootstrap for the grid system
* Jade(now PugJs) is used as a HTML templating language, LESS for CSS pre-processing.
* HarpJs(https://harpjs.com/) is used as a static web server for development.
* GulpJs(http://gulpjs.com/) is used to build distribution files.

### Getting set up ###

* Install gulp globally: $ npm install --global gulp-cli
* Install harp globally: $ npm install -g harp
* clone the repo and run gulp.
* Access distribution files from dist folder.

### Development guidelines ###

* cd into src folder, open up cmd/terminal and run: harp server
* Now you can make changes to jade, less or js files directly and check updated changes on the browser
* To export production files, cd to project root and run gulp. Final files will be gulped into the dist