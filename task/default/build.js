// build.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('build', ['templates', 'images'], function() {
	if($.util.env.send) {
		gulp.start('send');
	}
});
