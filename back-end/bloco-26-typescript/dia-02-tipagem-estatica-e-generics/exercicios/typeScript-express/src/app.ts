import express, { Express, Request, Response } from 'express';
import 'express-async-errors';
const app: Express = express();

app.use(express.json())

app.get('/', (_req: Request, res: Response) => res.send('Exercise 26.3.'));

export default app;
