import IJoiReturn from '../interfaces/IJoiReturn';
import INewUser from '../interfaces/INewUser';
import { orderSchema, productSchema, userSchema } from './schemas';

const validateNewOrder = (productsIds: number[]): IJoiReturn => {
  const { error } = orderSchema.validate({ productsIds });
  
  if (error) {
    const [status = 200, message = ''] = error.message.split('|');
    return { error: true, status: Number(status), message };
  }
  return { error: false, status: 200, message: '' };
};

const validateNewProduct = (name: string, amount: string): IJoiReturn => {
  const { error } = productSchema.validate({ name, amount });
  
  if (error) {
    const [status = 200, message = ''] = error.message.split('|');
    return { error: true, status: Number(status), message };
  }
  return { error: false, status: 200, message: '' };
};

const validateNewUser = (newUser: INewUser): IJoiReturn => {
  const { username, vocation, level, password } = newUser;
  const { error } = userSchema.validate({ username, vocation, level, password });
  
  if (error) {
    // console.log(error);
    const [status = 200, message = ''] = error.message.split('|');
    return { error: true, status: Number(status), message };
  }
  return { error: false, status: 200, message: '' };
};

export {
  validateNewProduct,
  validateNewOrder,
  validateNewUser,
};
