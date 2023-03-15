import IJoiReturn from '../interfaces/IJoiReturn';
import IProduct from '../interfaces/IProduct';
import * as productModel from '../models/product.model';
import { validateNewProduct } from './joiValidations';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const addNewProduct = async (newProduct: IProduct): Promise<IProduct | IJoiReturn> => {
  const response = validateNewProduct(newProduct.name, newProduct.amount);
  if (response.error) return response;

  const addNew = await productModel.addNewProduct(newProduct);
  return addNew;
};

export {
  getAll,
  addNewProduct,
};