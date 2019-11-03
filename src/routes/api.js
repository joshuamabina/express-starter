import { Router } from 'express';

import auth from '../auth'; // eslint-disable-line no-unused-vars
import * as authController from '../controllers/api/auth';
import * as userController from '../controllers/api/user';

const router = Router();

/**
 * @api {get} /api/v1 Ping
 * @apiVersion 1.0.0
 * @apiName Ping
 * @apiGroup API
 * @apiPermission none
 *
 * @apiExample {js} Example usage:

 * $http.get(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess {String} message message
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *    {
 *     name: 'express-starter',
 *     license: 'MIT',
 *     keywords: ['express', 'babel', 'boilerplate', 'scaffold', 'es6', 'es2015', 'es2016', 'es2017', 'jest', 'eslint'],
 *     engines: {
 *       node: '~6.9.1',
 *       npm: '>=3.10.0'
 *     }
 *    }
 *
 */
router.get('/', (req, res) => {
  const message = {
    name: 'express-starter',
    license: 'MIT',
    keywords: ['express', 'babel', 'boilerplate', 'scaffold', 'es6', 'es2015', 'es2016', 'es2017', 'jest', 'eslint'],
    engines: {
      node: '~6.9.1',
      npm: '>=3.10.0'
    }
  };

  return res.status(200).json(message);
});

/**
 * @api {post} /api/v1/register Register User
 * @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiParam (Request body) {String} id id
 * @apiParam (Request body) {String} email email
 * @apiParam (Request body) {String} password password
 *
 * @apiExample {js} Example usage:
 *  const user = {
 *    "id": "57e903941ca43a5f0805ba5a"
 *    "email": "user@example.com",
 *    "password": "password",
 *  };
 *
 * $http.post(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *

 * @apiSuccess (Success 201) {Object} user User
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 201 OK
 *     {
 *     "success": true,
 *     data: {
         "id": "57e903941ca43a5f0805ba5a"
      "email": "user@example.com",
      "password": "password",
    }
 *
 *    }
 *
 * @apiUse UnauthorizedError
 */
router.post('/register', authController.register);

/**
 * @api {post} /api/v1/login Log In
 * @apiVersion 1.0.0
 * @apiName LogIn
 * @apiGroup Auth
 * @apiPermission none
 *
 * @apiParam (Request body) {String} id  id
 * @apiParam (Request body) {String} email email
 * @apiParam (Request body) {String} password password
 *
 * @apiExample {js} Example usage:
 *  const user = {
 *    'id': '1234',
 *    'email': 'user@example.com',
 *    'password': 'password',
 *  };
 *
 * $http.post(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess (Success 201) {String} data User Object
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 201 OK
 *     {
 *     "success": true,
 *      data: {
 *       "id": "57e903941ca43a5f0805ba5a"
 *       "email": "user@example.com",
 *    }
 *  }
 *
 * @apiUse UnauthorizedError
 */
router.post('/login', authController.login);

/**
 * @api {post} /api/v1/user Get authenticated user
 * @apiVersion 1.0.0
 * @apiName Get User
 * @apiGroup User
 * @apiPermission authenticated user
 *
 *
 * @apiExample {js} Example usage:
 *
 * $http.defaults.headers.common["Authorization"] = token;
 * $http.post(url)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *

 * @apiSuccess (Success 201) {String} data User Object
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 201 OK
 *    {
 *     "success": true,
 *      data: {
 *       "id": "57e903941ca43a5f0805ba5a"
 *       "email": "user@example.com",
 *    }
 *  }
 *
 * @apiUse UnauthorizedError
 */
router.get('/user', /*[auth, ],*/ userController.getAuthUser);

export default router;
