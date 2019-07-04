import { Router } from 'express';

import * as registerController from '../controllers/register';

const router = Router();

router.get('/register', registerController.showRegistrationForm);

export default router;
