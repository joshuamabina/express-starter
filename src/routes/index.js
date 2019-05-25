import { Router } from 'express';

import api from './api';
import web from './web';

const router = Router();

router.use(web);
router.use(api);

export default router;
