
const log4jHelper = require('../lib/logger');
log4jHelper.connect({ name: 'test', level: 'debug' });
logger.debug(JSON.stringify(process.env))
logger.info('test success');
logger.error('it is wrong');

