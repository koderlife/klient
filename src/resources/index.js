const Resource = require('./resource');

const resources = {}

module.exports = name => {
	return resources[name] || (resources[name] = new Resource(name));
}