import { Router } from 'express';
import * as orderController from '../controllers/order.controller';
import validateToken from '../middlewares/tokenValidate';

const router = Router();

router.get('/', orderController.getAll);

router.post('/', validateToken, orderController.addNewOrder);

export default router;