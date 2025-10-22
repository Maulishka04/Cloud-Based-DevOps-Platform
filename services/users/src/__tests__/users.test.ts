import request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import appModule from '../testHelpers/app';

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
  app = appModule();
});

afterAll(async () => {
  const conn = getConnection();
  await conn.close();
});

test('GET /api/users returns 200', async () => {
  const res = await request(app).get('/api/users');
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('items');
});
