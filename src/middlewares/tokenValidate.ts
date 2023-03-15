import { NextFunction, Request, Response } from 'express';
import { tokenValidate } from '../helpers/token';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = tokenValidate(authorization);
    req.body.userToken = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;