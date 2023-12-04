import express, { Application, Request, Response } from 'express';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 8888;
const HOST_NAME = process.env.APP_HOST || 'localhost';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});

app.listen(PORT, (): void => {
  console.log(`Connected successfully on port http://${HOST_NAME}:${PORT}`);
});
