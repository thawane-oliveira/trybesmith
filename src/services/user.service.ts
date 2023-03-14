import { tokenGenerate } from '../helpers/token';
import ILogin from '../interfaces/ILogin';
import INewUser from '../interfaces/INewUser';
import * as userModel from '../models/user.model';

const addNewUser = async (newUser: INewUser): Promise<string> => {
  const addNew = await userModel.addNewUser(newUser);
  const token = tokenGenerate({ ...addNew, password: undefined });
  return token;
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