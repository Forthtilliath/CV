require('dotenv').config();
require('pretty-error').start();
const server = require('./controllers/server');
const app = require('./app');

server.create('http', process.env.PORT_HTTP, app);
