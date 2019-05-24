
/**
 * @module Application
 * @description The entry point, responsible to bootstrap all components.
 * @since 0.1.0
 * @public
 */

import path from 'path';
import express from 'express';
import env from 'node-env-file';
import mongoose from 'mongoose';
import logger from 'morgan';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import respond from 'express-respond';

import routes from './routes';


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
} else if (app.get('env') === 'test') {
  env(path.join(__dirname, './../.env.test'));
}


/**
 * Database configuration
 */
mongoose.connect('mongodb://localhost/demo', { useCreateIndex: true, useNewUrlParser: true });


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
app.use(session({ secret: 'foobarbaz', resave: true, saveUninitialized: true }));


/**
 * Passport
 */
app.use(passport.initialize());
app.use(passport.session());


/**
 * Routes
 */
app.use('/', routes);


/**
 * Response
 */
app.use(respond);

/**
 * Catch 404 and forward to error handler.
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/**
 * Multipurpose error handler.
 */
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (!err.status) err = { status: 500, message: 'Whoops! Something went wrong.' }

  res.status(err.status).render('error', { ...err });
});


export default app;
