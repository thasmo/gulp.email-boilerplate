// default.js

var gulp = require('gulp'),
	sequence = require('run-sequence');

gulp.task('default', ['setup'], function(callback) {
	return sequence('build', 'watch', callback);
});
