import INewOrder from '../interfaces/INewOrder';
import IOrder from '../interfaces/IOrder';
import * as orderModel from '../models/order.model';
import * as productModel from '../models/product.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const addNewOrder = async (newOrder: INewOrder) => {
  const addOrder = await orderModel.addNewOrder(newOrder.userId);
  await Promise.all(
    newOrder.productsIds.map((productId) => productModel.updateProduct(productId, addOrder)),
  );
  // const updateProd = await productModel.updateProduct(newOrder.productsIds, addOrder);
  return newOrder;
};

export { getAll, addNewOrder };