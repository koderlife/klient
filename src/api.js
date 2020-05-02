const axios = require('axios');

module.exports = (baseUrl, timeout = 5000) => {
	const client = axios.create({
		baseURL: baseUrl,
		timeout: timeout
	});

	return {
		setAuthKey(key, header = 'Authorization') {
			this.setHeaders({[header]: key})
		},

		setHeaders(headers) {
			client.interceptors.request.use(
				config => {
					Object.assign(config.headers, headers);

					return config;
				},
				error => {
					console.log(error);
					return Promise.reject(error);
				}
			);
		},

		async get(url, data) {
			return await this.request('get', url, data);
		},

		async post(url, data) {
			return await this.request('post', url, data);
		},

		async request(method, url = '', data) {
			if (!data && typeof url === 'object') {
				data = url;
				url = '';
			}

			const res = await client.request({
				url: url,
				method,
				data
			});

			return res.data;
		}
	}
}