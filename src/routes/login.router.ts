import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import loginValidate from '../middlewares/loginValidate';

const router = Router();

router.post('/', loginValidate, userController.loginUser);

export default router;