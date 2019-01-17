import { Router } from 'express';

import { auth } from './auth';

const routes = Router();


/**
 * GET /login
 */
routes.get('/login', (req, res) => res.render('login'));


/**
 * POST /login
 */
routes.post('/login', auth);


/**
 * GET /
 */
routes.get('/', auth, (req, res) => res.render('index'));


export default routes;
