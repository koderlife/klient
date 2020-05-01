const klient = require('../klient');

module.exports = class {
	constructor(name) {
		this.name = name;
	}

	async get(url, data) {
		return await this.request('get', url, data);
	}

	async post(url, data) {
		return this.request('post', url, data);
	}

	async request(method, url = '', data) {
		if (!data && typeof url === 'object') {
			data = url;
			url = '';
		}

		const res = await klient.request({
			url: this.name + '/' + url,
			method,
			data
		});

		return res.data;
	}
}
