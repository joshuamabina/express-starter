import request from 'supertest';

import app from '../src/app';

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('GET /', () => {
  it('renders the welcome page', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
  });
});


describe('GET /register', () => {
  it('renders the registration page', async () => {
    const response = await request(app).get('/register');

    expect(response.type).toBe('text/html');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /register', () => {
  it('registers a user if validation passes', async () => {
    const newUserData = {
        name: 'User',
        email: 'user@example.com',
        password: 'topsecretpassword',
    };

    const response = await request(app).post('/register').send(newUserData);

    expect(response.header.location).toBe('/home');
  });
});
