import request from 'supertest';

import app from '../src/app';

describe('GET /', () => {
  it('redirects to login if not authenticated', async () => {
    await request(app)
    .get('/')
    .expect(302);
  });
});

describe('GET /login', () => {
  it('renders the login page', async () => {
    await request(app)
      .get('/login')
      .expect(200);
  });
});
