import request from 'supertest';
import app from '../src/app.js';

describe('GET /login', () => {
  it('should render login page', async () => {
    await request(app).get('/login').expect(200);
  });
});

describe('GET /', () => {
  it('should render home page', async () => {
    await request(app).get('/').expect(200);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404);
    await request(app).get('/notfound').expect(404);
  });
});
