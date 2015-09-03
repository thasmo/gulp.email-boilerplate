// images.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	helper = require('../helper'),
	path = require('../path');

// Base
gulp.task('images', ['images:common']);

// Common
gulp.task('images:common', function() {
	var name = 'Common Images',
		filter = $.filter('*.svg', {
			restore: true
		});

	return gulp.src(path.source.image + '**/*.{png,jpg,gif,svg}')
		.pipe($.plumber(helper.error))
		.pipe($.changed(path.public.image))
		.pipe($.util.env.production ? $.imagemin(config.plugin.imagemin) : $.util.noop())
		.pipe(gulp.dest(path.public.image))
		.pipe(filter)
		.pipe($.svg2png())
		.pipe(gulp.dest(path.public.image))
		.pipe(filter.restore)
		.pipe($.duration(name))
		.pipe(helper.success(name));
});
