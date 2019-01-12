import { Router } from 'express';

const routes = Router();


/**
 * GET /login
 */
routes.get('/login', (req, res) => res.render('login'));


/**
 * GET home page
 */
routes.get('/', (req, res) => res.render('index'));


export default routes;
