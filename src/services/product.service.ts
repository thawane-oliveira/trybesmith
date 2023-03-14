import IProduct from '../interfaces/IProduct';
import * as productModel from '../models/product.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const xablau = () => null;

export { getAll, xablau };