// config.js

var path = require('./path'),
	local = require('./config.local');
	extend = require('extend');

var config = {
	task: {
		watch: {
			exclude: /\.map$/
		},
		send: {
			transport: null,
			email: {}
		}
	},

	plugin: {
		jade: {
			pretty: '\t'
		},

		htmlmin: {
			removeComments: true,
			removeCommentsFromCDATA: true,
			removeCDATASectionsFromCDATA: true,
			collapseWhitespace: true
		},

		imagemin: {
			optimizationLevel: 7,
			progressive: true,
			interlaced: true,
			svgoPlugins: [
				{removeDoctype: false},
				{removeXMLProcInst: false}
			]
		},

		juiceConcat: {
			preserveMediaQueries: true
		},

		server: {
			server: {
				baseDir: path.public.main
			},
			reloadDebounce: 250,
			online: true
		}
	}
};

module.exports = extend(true, config, local);
