import IJoiReturn from '../interfaces/IJoiReturn';
import { orderSchema } from './schemas';

const validateNewOrder = (productsIds: number[]): IJoiReturn => {
  const { error } = orderSchema.validate({ productsIds });
  
  if (error) {
    const [status = 200, message = ''] = error.message.split('|');
    return { error: true, status: Number(status), message };
  }
  return { error: false, status: 200, message: '' };
};

const validateNewProduct = () => null;

export {
  validateNewProduct,
  validateNewOrder,
};
