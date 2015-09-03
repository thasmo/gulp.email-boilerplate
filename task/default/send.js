// send.js

var gulp = require('gulp'),
    config = require('../config'),
    path = require('../path'),
    helper = require('../helper');

var send = function(options) {
	var mailer = require('nodemailer'),
	    cheerio = require('cheerio'),
	    md5 = require('md5'),
	    through = require('through2'),
	    transporter = mailer.createTransport(options.transport);

	var send = function(file, encoding, callback) {
		var config = options.email,
		    content = cheerio.load(String(file.contents)),
		    cache = {};

		// set subject
		config.subject = content('title').text();

		// prepare attachments
		config.attachments = [];

		// process embeds
		content('img').each(function() {
			var src = content(this).attr('src'),
			    hash = md5(src);

			if(!cache[hash]) {
				var attachment = {
					filename: require('path').basename(src),
					path: path.public.main + src,
					cid: hash
				};

				// add attachment
				config.attachments.push(attachment);

				// populate cache
				cache[hash] = attachment;
			}

			// update src attribute
			content(this).attr('src', 'cid:' + hash);
		});

		// set contents
		config.html = content.html();

		// send email
		transporter.sendMail(config, function(error) {
			if(error) {
				return console.log(error);
			}

			callback(null, file);
		});
	};

	return through.obj(send);
};

gulp.task('send', function() {
	var name ='Send';

	return gulp.src(path.public.main + '*.html')
		.pipe(send(config.task.send))
		.pipe(helper.success(name));
});
