import IJoiReturn from '../interfaces/IJoiReturn';
import INewOrder from '../interfaces/INewOrder';
import IOrder from '../interfaces/IOrder';
import * as orderModel from '../models/order.model';
import * as productModel from '../models/product.model';
import { validateNewOrder } from './joiValidations';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const addNewOrder = async (newOrder: INewOrder): Promise<INewOrder | IJoiReturn> => {
  const response = validateNewOrder(newOrder.productsIds);
  if (response.error) return response;

  const addOrder = await orderModel.addNewOrder(newOrder.userId);
  await Promise.all(newOrder.productsIds.map(
    (productId) => productModel.updateProduct(productId, addOrder),
  ));
  return newOrder;
};

export { getAll, addNewOrder };