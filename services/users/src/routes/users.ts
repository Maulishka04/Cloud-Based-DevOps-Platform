import { Router } from 'express';
import * as repo from '../services/userRepo';

export const userRouter = Router();

// GET /api/users?page=1&limit=10 -> paginated list
userRouter.get('/', async (req, res) => {
  const page = parseInt((req.query.page as string) || '1', 10);
  const limit = parseInt((req.query.limit as string) || '10', 10);
  const data = await repo.listUsers(page, limit);
  res.json({ ...data, page, limit });
});

// POST /api/users -> create
userRouter.post('/', async (req, res) => {
  const created = await repo.createUser(req.body);
  res.status(201).json(created);
});

// GET /api/users/:id
userRouter.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = await repo.getUserById(id);
  if (!user) return res.status(404).json({ message: 'not found' });
  res.json(user);
});

// PUT /api/users/:id
userRouter.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updated = await repo.updateUser(id, req.body);
  res.json(updated);
});

// DELETE /api/users/:id
userRouter.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await repo.deleteUser(id);
  res.status(204).send();
});
