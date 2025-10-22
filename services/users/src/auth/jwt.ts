import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'REPLACE_ME';

export function sign(payload: object, opts = {}) {
  return jwt.sign(payload, SECRET, opts as any);
}

export function verify(token: string) {
  return jwt.verify(token, SECRET);
}

export default { sign, verify };
