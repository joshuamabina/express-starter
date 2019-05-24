import request from 'supertest';

import app from '../src/app';

describe('GET /login', () => {
  it('should render login page', async () => {
    await request(app).get('/login')
      .expect(200);
  });
});

describe('GET /', () => {
  it('should render the welcome page', async () => {
    await request(app).get('/')
      .expect(200);
  });
});
