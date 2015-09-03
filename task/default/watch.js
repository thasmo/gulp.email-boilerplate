// watch.js

var gulp = require('gulp'),
    server = require('browser-sync'),
    config = require('../config'),
    path = require('../path');

gulp.task('watch', ['watch:tasks', 'watch:server']);

gulp.task('watch:tasks', function() {

	// Setup
	gulp.watch(path.setup.bower, ['setup:bower']);

	// Templates
	gulp.watch([path.source.template + '**/*.jade', path.source.style + '**/*.scss'], ['templates']);

	// Images
	gulp.watch(path.source.image + '**', ['images']);

	// Mailer
	gulp.watch('task/send', ['send']);
});

// Server
gulp.task('watch:server', function() {
	server(config.plugin.server, function() {
		gulp.watch(path.public.main + '**').on('change', function(file) {
			if(!file.path.match(config.task.watch.exclude)) {
				server.reload(file.path);
			}
		});
	});
});
