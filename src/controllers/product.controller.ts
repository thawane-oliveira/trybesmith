import { Request, Response } from 'express';
import * as productService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const xablau = () => null;

export { getAll, xablau };