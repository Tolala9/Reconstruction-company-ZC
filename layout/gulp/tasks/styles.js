var gulp       = require('gulp'),
autoprefixer   = require('autoprefixer'),
sass           = require('gulp-sass'),
cleanCSS       = require('gulp-clean-css'),
rename         = require('gulp-rename'),
autoprefixer   = require('gulp-autoprefixer'),
browserSync    = require('browser-sync').create(),
notify         = require("gulp-notify");


// Project Styles
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename("style.css"))
	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleanCSS()) // Optionnal, comment for debag
	.pipe(gulp.dest('./app/temp/styles'))
});