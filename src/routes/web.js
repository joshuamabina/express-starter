import { Router } from 'express';

import auth from '../middlewares/auth'; // eslint-disable-line no-unused-vars
import * as registerController from '../controllers/register';
import * as loginController from '../controllers/login';
import * as homeController from '../controllers/home';

const router = Router();

router.get('/', homeController.welcome);

router.get('/login', loginController.showLoginForm);
router.post('/login', loginController.loginUser);

router.get('/home', [auth, ], homeController.show);

router.get('/register', registerController.showRegistrationForm);
router.post('/register', registerController.registerUser);

export default router;
