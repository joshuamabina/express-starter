import { Router } from 'express';

import * as registerController from '../controllers/register';
import * as homeController from '../controllers/home';

const router = Router();

/**
 * @api {get} / Welcome
 * @apiVersion 1.0.0
 * @apiName wecome
 * @apiGroup Web
 * @apiPermission none
 *
 * @apiExample {js} Example usage:
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 *
 * @apiUse UnauthorizedError
 */
router.get('/', homeController.welcome);

/**
 * @api {get} /home home
 * @apiVersion 1.0.0
 * @apiName wecome
 * @apiGroup Web
 * @apiPermission none
 *
 * @apiExample {js} Example usage:
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 *
 * @apiUse UnauthorizedError
 */
router.get('/home', homeController.show);

/**
 * @api {get} /register Register Form
 * @apiVersion 1.0.0
 * @apiName RegisterForm
 * @apiGroup Web
 * @apiPermission none
 *
 * @apiExample {js} Example usage:
 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 *
 * @apiUse UnauthorizedError
 */
router.get('/register', registerController.showRegistrationForm);

/**
 * @api {post} / register
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Web
 * @apiPermission none
 *
 * @apiExample {js} Example usage:
 * *  const user = {
        "id": "57e903941ca43a5f0805ba5a"
      "email": "user@example.com",
      "password": "password",
    };
 *

* $http.post(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());


 * @apiSuccess (Success 201) {Object} user User
 *
  *
 *
 * @apiUse UnauthorizedError
 */
router.post('/register', registerController.registerUser);

export default router;
