import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export interface CreateUserDTO {
  name: string;
  email: string;
  bio?: string;
}

export async function listUsers(page = 1, limit = 10) {
  const repo = getRepository(User);
  const [items, total] = await repo.findAndCount({
    skip: (page - 1) * limit,
    take: limit,
    order: { id: 'ASC' },
  });
  return { items, total };
}

export async function createUser(input: CreateUserDTO) {
  const repo = getRepository(User);
  const entity = repo.create(input as Partial<User>);
  return repo.save(entity);
}

export async function getUserById(id: number) {
  const repo = getRepository(User);
  return repo.findOneBy({ id });
}

export async function updateUser(id: number, update: Partial<User>) {
  const repo = getRepository(User);
  await repo.update(id, update);
  return repo.findOneBy({ id });
}

export async function deleteUser(id: number) {
  const repo = getRepository(User);
  return repo.delete(id);
}

export default { listUsers, createUser, getUserById, updateUser, deleteUser };
