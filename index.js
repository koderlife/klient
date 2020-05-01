const klient = require('./src/klient');
const resource = require('./src/resources');

module.exports = resource;

module.exports.setApiKey = key => {
	klient.key(key);
}
