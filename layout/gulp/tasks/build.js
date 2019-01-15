var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del 		 = require('del'),
usemin   = require('gulp-usemin'),
rev      = require('gulp-rev'),
cssnano  = require('gulp-cssnano'),
uglify   = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('preview', function() {
	browserSync.init({
      server: {
        baseDir: "docs"
      },
      notify: false
  });
});


gulp.task('deleteDistFolder', function() {
	return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathToCopy = [
		'./app/**/*', 
		'./app/.htaccess', 
		'!./app/index.html',
		'!./app/assets/img/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/assets/fonts',
		'!./app/assets/fonts/**',
		'!./app/assets/libs',
		'!./app/assets/libs/**',
		'!./app/temp',
		'!./app/temp/**'
	]

	return gulp.src(pathToCopy)
		.pipe(gulp.dest("./docs"));

});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/img/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/img"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp.src("./app/*.html")
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
})

gulp.task('build',['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);