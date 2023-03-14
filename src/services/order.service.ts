import IOrder from '../interfaces/IOrder';
import * as orderModel from '../models/order.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const xablau = () => null;

export { getAll, xablau };