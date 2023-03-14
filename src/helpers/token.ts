import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import INewUser from '../interfaces/INewUser';

const tokenSecret:Secret = process.env.JWT_SECRET || 'thawane';

const config: SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const tokenGenerate = (payload: INewUser) => jwt.sign(payload, tokenSecret, config);

const tokenValidate = (token: string) => jwt.verify(token, tokenSecret);

export {
  tokenGenerate,
  tokenValidate,
};