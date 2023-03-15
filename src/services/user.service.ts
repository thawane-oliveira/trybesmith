import { tokenGenerate } from '../helpers/token';
import IJoiReturn from '../interfaces/IJoiReturn';
import ILogin from '../interfaces/ILogin';
import INewUser from '../interfaces/INewUser';
import * as userModel from '../models/user.model';
import { validateNewUser } from './joiValidations';

const addNewUser = async (newUser: INewUser): Promise<IJoiReturn> => {
  const response = validateNewUser(newUser);
  
  if (response.error) return response;

  const addNew = await userModel.addNewUser(newUser);
  const token = tokenGenerate({ ...addNew, password: undefined });
  return { error: false, status: 201, message: token };
};

const loginUser = async (credentials: ILogin): Promise<string | null> => {
  const logged = await userModel.getByName(credentials);
  if (logged) {
    const token = tokenGenerate({ ...logged, password: undefined });
    return token;
  }
  return null;
};

export {
  loginUser,
  addNewUser,
};