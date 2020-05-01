const klient = require('../klient');

module.exports = class {
	constructor(name) {
		this.name = name;
	}

	async get(url, data) {
		return this.request('get', url, data);
	}

	async post(url, data) {
		return this.request('post', url, data);
	}

	async request(method, url, data) {
		if (!data && typeof url === 'object') {
			url = '';
			data = url;
		}

		return klient.request({
			method,
			url,
			data
		});
	}
}
