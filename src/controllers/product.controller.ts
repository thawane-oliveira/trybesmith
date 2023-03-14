import { Request, Response } from 'express';
import * as productService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const xablau = () => 'oi';

// const addNewProduct = async (req: Request, res: Response) => {
//   const newProduct = req.body;
//   const addNew = await productService.addNewProduct(newProduct);
//   return res.status(201).json(addNew);
// };

export {
  getAll,
  // addNewProduct,
  xablau,
};