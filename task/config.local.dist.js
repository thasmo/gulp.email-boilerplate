// config.local.js

module.exports = {
	task: {
		send: {
			transport: {
				host: '',
				port: 587,
				auth: {
					user: '',
					pass: ''
				}
			},
			email: {
				from: '',
				to: []
			}
		}
	}
};
