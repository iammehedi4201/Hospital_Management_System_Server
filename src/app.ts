import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { globalErrorHandler } from './app/Middleware/globalErrorHandler';
import route from './app/Routes/Routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(express.text());

//using cors
app.use(cors());

//application routes
app.use('/api', route);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error('this is a test error');
    res.send('Hello Hospital Management System');
  } catch (error) {
    next(error);
  }
});

//Global Error Handler
app.use(globalErrorHandler);

//not found middlewar
// app.use();
export default app;
