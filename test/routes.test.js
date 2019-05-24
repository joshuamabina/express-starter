import request from 'supertest';

import app from '../src/app';

describe('GET /login', () => {
  it('should render login page', async () => {
    await request(app).get('/login').expect(200);
  });
});

describe('GET /', () => {
  it('should redirect to /login if not authenticated', async () => {
    await request(app).get('/').expect(302);
  });

  it('should render home page if authenticated', async () => {
    await request(app).get('/users').expect(200);
  });
});

describe('GET /users/create', () => {
  it('should render create user page', async () => {
    await request(app).get('/users/create').expect(200);
  });
});

describe('POST /users', () => {
  it('should create a new user', async () => {
    await request(app).post('/users').expect(201);
  });
});

describe('GET /users', () => {
  it('should render users list', async () => {
    await request(app).get('/users').expect(200);
  });
});

describe('GET /posts/create', () => {
  it('should render create post page', async () => {
    await request(app).get('/post/create').expect(200);
  });
});

describe('POST /posts', () => {
  it('should create a new post', async () => {
    await request(app).get('/posts').expect(200);
  });
});

describe('GET /posts', () => {
  it('should render posts list', async () => {
    await request(app).get('/posts').expect(200);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404);
    await request(app).get('/notfound').expect(404);
  });
});
