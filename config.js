exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://ladyjem:bestrong9@ds239965.mlab.com:39965/first-database';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://ladyjem:bestrong9@ds241875.mlab.com:41875/test-restaurants-app');
exports.PORT = process.env.PORT || 8080;