import request from 'supertest';

import app from '../src/app';

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('GET /login', () => {
  it('renders the login page', async () => {
    const response = await request(app).get('/login');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
  });
});

describe('GET /', () => {
  it('redirects to login page if not authenticated', async () => {
    const response = await request(app).get('/');

    expect(response.redirect).toBe(true);
    expect(response.statusCode).toBe(302);

    expect(response.type).toBe('text/plain');
  });
});

describe('GET /api/v1/user', () => {
  it('gets the authenticated user', async () => {
    const authenticatedUser = {
      id: '1234',
      email: 'user@example.com',
      password: 'password',
    };

    const response = await request(app).get('/api/v1/user');

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(authenticatedUser);
  });
});
