// templates.js

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	config = require('../config'),
	path = require('../path'),
	helper = require('../helper');

gulp.task('templates', function() {
	var name = 'Templates',
		jadeFilter = $.filter('**/*.jade', {restore: true}),
		sassFilter = $.filter('**/*.scss', {restore: true});

	return gulp.src([path.source.template + '*.jade', path.source.style + '*.scss'])
		.pipe($.plumber(helper.error))
		.pipe(jadeFilter)
		.pipe($.jade(config.plugin.jade))
		.pipe($.if($.util.env.production, $.htmlmin()))
		.pipe(jadeFilter.restore)
		.pipe(sassFilter)
		.pipe($.sass())
		.pipe($.autoprefixer())
		.pipe($.if($.util.env.production, $.cssnano()))
		.pipe(sassFilter.restore)
		.pipe($.juiceConcat(config.plugin.juiceConcat))
		.pipe(gulp.dest(path.public.main))
		.pipe(helper.success(name));
});
