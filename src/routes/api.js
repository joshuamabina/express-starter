import { Router } from 'express';

import auth from '../auth';
import * as authController  from '../controllers/api/auth';
import * as userController from '../controllers/api/user';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200)
    .json({ message: 'It works!', });
});

/**
 * POST /register Register a user
 */
router.post('/register', authController.register);


/**
 * POST /login Log in
 */
router.post('/login', authController.login);

/**
 * GET /users/me Get authenticated user
 */
router.get('/users/me', [auth, ], userController.getAuthUser);

export default router;
