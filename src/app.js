
/**
 * @module Application
 * @description The entry point, responsible to bootstrap all components.
 * @since 0.1.0
 * @public
 */

import path from 'path';
import express from 'express';
import env from 'node-env-file';
import logger from 'morgan';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';


import apiRoutes from './routes/api';
import webRoutes from './routes/web';


/**
 * Create a new application instance.
 */
const app = express();
app.disable('x-powered-by');


/**
 * Application environment
 */
if (app.get('env') === 'development') {
  env(path.join(__dirname, './../.env'));
} else if (app.get('env') === 'testing') {
  env(path.join(__dirname, './../.env.testing'));
}


/**
 * Database
 */
const uri = process.env.DB_DATABASE;

const options = {
  useNewUrlParser: true,
}

mongoose.connect(uri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database.')); // eslint-disable-line no-console
db.on('connected', console.info.bind(console, 'Success connecting to the database.')); // eslint-disable-line no-console
db.on('disconnected', console.error.bind(console, 'Failed connecting to the database.')); // eslint-disable-line no-console


/**
 * Logger
 */
app.use(logger('dev', { skip: () => app.get('env') !== 'development' }));


/**
 * View templating engine
 */
nunjucks.configure('views', { autoescape: true, express: app, watch: true });
app.set('view engine', 'html');


/**
 * Body parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));


/**
 * Session
 */
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));


/**
 * Passport
 */
app.use(passport.initialize());
app.use(passport.session());


/**
 * Routes
 */
app.use('/api/v1/', apiRoutes);
app.use('/', webRoutes);


/**
 * Catch 404 and forward to error handler.
 */
app.use((req, res, next) => {
  // todo check if accepts html and render error html page
  // else return json error message

  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/**
 * Multipurpose error handler.
 */
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  // todo check if accepts html and render error html page
  // else return json error message

  if (!err.status) err = { status: 500, message: 'Whoops! Something went wrong.' }

  res.status(err.status).render('error', { ...err });
});


export default app;
