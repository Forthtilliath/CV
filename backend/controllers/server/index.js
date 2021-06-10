const options = require('../../security');
const port = require('../../config/port');
const { errorHandler, successHandler } = require('./handlers');
const chalk = require('chalk');

const colors = { http: chalk.cyan, https: chalk.yellow };

const createServer = (serverType, app, options) => {
    const server = require(serverType);

    if (serverType === 'http') {
        return server.createServer(app);
    } else {
        return server.createServer(options, app);
    }
};

const create = (serverType, numPort, app) => {
    if (serverType !== 'http' && serverType !== 'https') {
        console.log(chalk.red('Erreur dans le choix du server :', serverType));
        process.exit(1);
    }

    const serverPort = port(numPort);
    if (serverPort === -1) {
        console.log(chalk.red('Erreur dans le port :', numPort));
        process.exit(1);
    }

    createServer(serverType, app, options)
       .on('error', (e) => errorHandler(e, serverPort))
       .on('listening', () => successHandler(serverPort, colors[serverType], app.get('env')))
       .listen(serverPort);
};

module.exports.create = create;
