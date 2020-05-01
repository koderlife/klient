const axios = require('axios');

const environments = {
	development: 'http://localhost:3000'
}

const client = axios.create({
	baseURL: environments[process.env.NODE_ENV],
	timeout: 5000
});

module.exports.key = function(key) {
	client.interceptors.request.use(
		config => {
			config.headers['Authorization'] = key;

			return config;
		},
		error => {
			console.log(error);
			return Promise.reject(error);
		}
	);

	Object.assign(module.exports, client);
};
