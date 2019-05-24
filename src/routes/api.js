import { Router } from 'express';

import auth from '../auth';
import * as authController  from '../controllers/auth';

const api = Router();


/**
 * POST /register Register a user
 */
api.post('/api/v1/register', (req, res, next) => authController.register);


/**
 * POST /login Log in
 */
api.post('/api/v1/login', (req, res, next) => authController.login);


/**
 * POST /logout Logout a user
 */
// routes.post('/api/v1/logout', auth, (req, res, next) => authController.logout);


/**
 * GET / Get authenticated user
 */
// routes.get('/api/v1/users/me', auth, (req, res, next) => userController.getAuthUser);


export default api;
