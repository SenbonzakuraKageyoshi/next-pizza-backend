import Router from 'express';
import { createOrder, getOrders } from '../controllers/orderController/index.js';
import authCheck from '../utils/authCheck.js';

const router = Router();

router.post('/create-order', authCheck, createOrder);
router.post('/get-orders', authCheck, getOrders);

export default router;