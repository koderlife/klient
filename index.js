const api = require('./api');

const apis = {}

module.exports = name => {
	return apis[name];
}

module.exports.addKoderLifeApi = (name = 'kl') => {
	const urls = {
		development: 'http://localhost:3000'
	}

	this.add(name, urls[process.env.NODE_ENV || 'development']);
}

module.exports.add = (name, baseUrl) => {
	apis[name] = api(baseUrl);
}
