import { Request, Response } from 'express';
import * as orderService from '../services/order.service';

const getAll = async (_req: Request, res: Response) => {
  const allOrders = await orderService.getAll();
  console.log(allOrders);
  
  return res.status(200).json(allOrders);
};

const xablau = () => null;

export { getAll, xablau };