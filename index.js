const api = require('./src/api');

const apis = {}

module.exports = name => {
	return apis[name];
}

module.exports.addKoderLifeApi = function(name = 'kl') {
	const urls = {
		development: 'http://localhost:3000'
	}

	this.add(name, urls[process.env.NODE_ENV || 'development'], 15000);

	return apis[name];
}

module.exports.add = function(name, baseUrl, timeout) {
	apis[name] = api(baseUrl, timeout);
}
