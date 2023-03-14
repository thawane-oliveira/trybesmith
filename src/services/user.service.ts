import { tokenGenerate } from '../helpers/token';
import INewUser from '../interfaces/INewUser';
import * as userModel from '../models/user.model';

const xablau = () => 'x';

const addNewUser = async (newUser: INewUser): Promise<string> => {
  const addNew = await userModel.addNewUser(newUser);
  const token = tokenGenerate({ ...addNew, password: undefined });
  return token;
};

export {
  xablau,
  addNewUser,
};