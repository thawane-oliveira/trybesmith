import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAll();
 
  return res.status(200).json(allOrders);
};

const addNewOrder = async (req: Request, res: Response) => {
  console.log(req.body, 'passou por aqui, testando');
  const { productsIds, userToken } = req.body;
  const order = await orderService.addNewOrder({ userId: userToken.userId, productsIds });
  return res.status(201).json(order);
};

export { getAll, addNewOrder };