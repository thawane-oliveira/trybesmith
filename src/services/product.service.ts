import IProduct from '../interfaces/IProduct';
import * as productModel from '../models/product.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const xablau = () => 'oi';

// const addNewProduct = async (newProduct: IProduct): Promise<IProduct[]> => {
//   const addNew = await productModel.addNewProduct(newProduct);
//   return addNew;
// };

export {
  getAll,
  xablau,
  // addNewProduct
};