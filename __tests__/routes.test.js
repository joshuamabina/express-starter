import request from 'supertest';

import app from '../src/app';

describe('GET /', () => {
  it('Redirects to login page if not authenticated', async () => {
    await request(app)
    .get('/')
    .expect(302);
  });
});

describe('GET /login', () => {
  it('Renders the login page', done => {
    request(app)
      .get('/login')
      .expect(200)
      .end(done);
  });
});

describe('GET /api/v1/user', () => {
  it('Gets the authenticated user', done => {
    const authenticatedUser = {
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    };

    request(app)
      .get('/api/v1/user')
      .expect(200, authenticatedUser)
      .end(done);
  });
});
