import Router from 'express';
import { createOrder } from '../controllers/orderController/index.js';
import authCheck from '../utils/authCheck.js';

const router = Router();

router.post('/create-order', authCheck, createOrder);

export default router;