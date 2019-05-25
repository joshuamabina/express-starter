import { Router } from 'express';

import auth from '../auth';
import * as homeController from '../controllers/home';
import * as loginController from '../controllers/login';

const router = Router();


/**
 * GET /
 */
router.get('/', auth, homeController.show);


/**
 * GET /login
 */
router.get('/login', loginController.showLoginForm);


/**
 * POST /login
 */
router.post('/login', loginController.login);


export default router;
