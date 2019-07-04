import request from 'supertest';

import app from '../src/app';

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('GET /register', () => {
  it('renders the registration page', async () => {
    const response = await request(app).get('/register');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
  });
});
