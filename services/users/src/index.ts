import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { userRouter } from './routes/users';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.use('/api/users', userRouter);

const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('ws connected', socket.id);
  socket.on('echo', (msg) => socket.emit('msg', `echo:${msg}`));
});

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    const connection = await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/entities/*.js'],
      synchronize: true,
    });
    console.log('Connected to Postgres');

    server.listen(PORT, () => console.log(`Users service listening on ${PORT}`));
  } catch (err) {
    console.error('Failed to start app', err);
    process.exit(1);
  }
}

start();
