const api = require('./api');

const apis = {}

module.exports.addKoderLifeApi = (name = 'kl') => {
	const urls = {
		development: 'http://localhost:3000'
	}

	this.add(name, urls[process.env.NODE_ENV || 'development']);
}

module.exports.add = (name, baseUrl) => {
	apis[name] = api(baseUrl);
}

module.exports.api = name => {
	return apis[name];
}
