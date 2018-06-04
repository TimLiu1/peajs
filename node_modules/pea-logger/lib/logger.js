
const fs = require('fs');
const log4js = require('log4js');
const lg = function () {
    return {
        connect(config) {
            let folderPath = `${process.env.HOME}/logs`;
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            const log4jsConfig = {
                appenders: {
                    dateFile: {
                        type: 'dateFile',
                        filename: folderPath + '/' + config.name || 'logger',
                        pattern: '_yyyy-MM-dd.log',
                        alwaysIncludePattern: true
                    },
                    errorDateFile: {
                        type: 'dateFile',
                        filename: folderPath + '/' + config.name || 'logger',
                        pattern: '_error_yyyy-MM-dd.log',
                        alwaysIncludePattern: true
                    },
                    'just-errors': {
                        type: 'logLevelFilter',
                        appender: 'errorDateFile',
                        level: 'error'
                    },
                    out: {
                        type: 'stdout'
                    }
                },
                categories: {
                    default: { appenders: ['just-errors', 'dateFile', 'out'], level: config.level }
                },
                replaceConsole: true
            };
            log4js.configure(log4jsConfig);
            global.logger = log4js.getLogger(config.name || 'logger');
        },
    };
};

module.exports = lg();