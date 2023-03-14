import IProduct from '../interfaces/IProduct';
import INewProduct from '../interfaces/INewProduct';
import * as productModel from '../models/product.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const addNewProduct = async (newProduct: INewProduct): Promise<INewProduct> => {
  const addNew = await productModel.addNewProduct(newProduct);
  return addNew;
};

export {
  getAll,
  addNewProduct,
};