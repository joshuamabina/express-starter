import { Router } from 'express';

import auth from '../auth';

const web = Router();


/**
 * GET /welcome
 */
web.get('/', (req, res, next) => res.render('welcome'));


/**
 * GET /login
 */
web.get('/login', (req, res, next) => res.render('login'));


export default web;
