import { Request, Response } from 'express';
import * as userService from '../services/user.service';

const addNewUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const token = await userService.addNewUser(newUser);

  if (!token.error) {
    return res.status(token.status || 402).json({ token: token.message });
  }
  return res.status(token.status).json({ message: token.message });
};

const loginUser = async (req: Request, res: Response) => {
  const credentials = req.body;

  const token = await userService.loginUser(credentials);
  if (token) return res.status(200).json({ token });

  return res.status(401).json({ message: 'Username or password invalid' });
};

export {
  loginUser,
  addNewUser,
};