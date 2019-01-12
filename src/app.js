
/**
 * @module Application
 * @description The entry point, responsible to bootstrap all components.
 * @since 0.1.0
 * @public
 */


import path from 'path';


/**
 * Create a new application instance.
 */
import express from 'express';
const app = express();
app.disable('x-powered-by');

/**
 * Application environment
 */
import env from 'node-env-file';
if (app.get('env') === 'development') {
  env(path.join(__dirname, './../.env'));
}


/**
 * Logger
 */
import logger from 'morgan';
app.use(logger('dev', { skip: () => app.get('env') !== 'development' }));


/**
 * View templating engine
 */
import nunjucks from 'nunjucks';
nunjucks.configure('views', { autoescape: true, express: app, watch: true });
app.set('view engine', 'html');


/**
 * Body parser
 */
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));


/**
 * Routes
 */
import routes from './routes';
app.use('/', routes);


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
