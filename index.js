const dotenv = require('dotenv');
const klient = require('./src/klient');
const resource = require('./src/resources');

dotenv.config({
	path: './.env/' + process.env.NODE_ENV
})

module.exports = resource;

module.exports.setApiKey = key => {
	klient(key);
}
