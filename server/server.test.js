const request = require('supertest');
const app = require('./index');

describe('Todo API', () => {
  test('GET /api/todos returns array', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/todos creates a todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ text: 'Test todo' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('Test todo');
  });
});
