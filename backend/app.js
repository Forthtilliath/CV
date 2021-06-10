const express     = require('express');
const path        = require('path');
const helmet      = require('helmet');
const nocache     = require('nocache');
const compression = require('compression');
// const db          = require('./config/database');
const app         = express();
app.set('trust proxy', 1) // trust first proxy

// Si cookie-express, utiliser csurf pour leur protection

const router  = express.Router();
// db.connectUser();

const mailRoutes = require('./routes/mail');

const headers = require('./middleware/header');
const apiLimiter = require('./middleware/apiLimiter');

// Middlewares
app.use(apiLimiter);
app.use(compression());
app.use(helmet());
app.use(headers());
app.use(nocache());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
router.use('/mail', mailRoutes);

app.use('/api', router);

module.exports = app;
