var gulp = require('gulp'),
	less = require('gulp-less'),
	cleanCSS = require('gulp-clean-css'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer');
  // watchLess = require('gulp-watch-less');
	// imageMin = require('gulp-imagemin'),
	// LessAutoprefix = require('less-plugin-autoprefix'),
	// autoprefix = new LessAutoprefix();

// JADE --> HTMl
gulp.task('html', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'))
});

// LESS --> CSS --> Autoprefix --> Minify --> final CSS file

gulp.task('less', function () {
  gulp.src('src/css/main.less')
    .pipe(less())
	  .pipe(autoprefixer({
			browsers: ['IE 9', 'last 3 versions', 'safari >= 7']
		}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

// Minifying JS files
gulp.task('scripts', function(){
	gulp.src('src/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
});

// Images not getting compressed. Needs to be checked. Copying over images as is for now.
gulp.task('images', function(){
	gulp.src('src/img/**/*')
	.pipe(gulp.dest('dist/img/'))
});

// Videos not getting compressed. Needs to be checked. Copying over images as is for now.
gulp.task('video', function(){
	gulp.src('src/video/**/*')
	.pipe(gulp.dest('dist/video/'))
});


// Copying over font files
gulp.task('fonts', function(){
	gulp.src('src/fonts/**')
	.pipe(gulp.dest('dist/fonts'))
});

//  Run all tasks
gulp.task('default', ['html', 'less', 'scripts', 'images', 'video', 'fonts']);