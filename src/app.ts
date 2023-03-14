import express from 'express';
import productRouter from './routes/products.router';
import orderRouter from './routes/orders.router';
import userRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

app.use('/users', userRouter);

export default app;
