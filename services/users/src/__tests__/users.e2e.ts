import request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import createApp from '../testHelpers/app';

let app: any;

beforeAll(async () => {
  await createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [__dirname + '/../entities/*.ts'],
    synchronize: true,
    logging: false,
  });
  app = createApp();
});

afterAll(async () => {
  const conn = getConnection();
  await conn.close();
});

test('e2e create and get user', async () => {
  const resCreate = await request(app).post('/api/users').send({ name: 'Alice', email: 'alice@example.com' });
  expect(resCreate.status).toBe(201);
  expect(resCreate.body).toHaveProperty('id');

  const id = resCreate.body.id;
  const resGet = await request(app).get(`/api/users/${id}`);
  expect(resGet.status).toBe(200);
  expect(resGet.body.email).toBe('alice@example.com');
});
