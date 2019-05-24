import { Router } from 'express';

import api from './api';
import web from './web';

const routes = Router();

routes.use(api);
routes.use(web);

export default routes;
