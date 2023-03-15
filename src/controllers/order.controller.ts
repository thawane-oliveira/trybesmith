import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAll();

  return res.status(200).json(allOrders);
};

const addNewOrder = async (req: Request, res: Response) => {
  const { productsIds, userToken } = req.body;
  const order = await orderService.addNewOrder({ userId: userToken.userId, productsIds });

  if (!order.error) {
    return res.status(201).json(order);
  }

  return res.status(order.status || 400).json({ message: order.message });
};

export { getAll, addNewOrder };