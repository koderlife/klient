const axios = require('axios');

module.exports = function(key) {
	const client = axios.create({
		baseURL: process.env.BASE_URL,
		timeout: 5000
	});

	client.interceptors.request.use(
		config => {
			config.headers['Authorization'] = key;

			return config;
		},
		error => {
			console.log(error) // for debug
			return Promise.reject(error)
		}
	);

	Object.assign(module.exports, client);
};
