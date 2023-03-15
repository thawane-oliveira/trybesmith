import { Request, Response } from 'express';
import * as productService from '../services/product.service';

const getAll = async (_req: Request, res: Response) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const addNewProduct = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const product = await productService.addNewProduct(newProduct);

  if (!product.error) {
    return res.status(201).json(product);
  }

  return res.status(product.status || 400).json({ message: product.message });
};

export {
  getAll,
  addNewProduct,
};