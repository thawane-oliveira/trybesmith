import { Request, Response } from 'express';
import * as userService from '../services/user.service';

const addNewUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const token = await userService.addNewUser(newUser);
  return res.status(201).json({ token });
};

const loginUser = async (req: Request, res: Response) => {
  const credentials = req.body;
  const token = await userService.loginUser(credentials);
  return res.status(200).json({ token });
};
export {
  loginUser,
  addNewUser,
};