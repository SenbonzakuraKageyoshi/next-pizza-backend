import Router from 'express';
import productRouter from './productsRouter.js';
import authRouter from './authRouter.js';
import userRouter from './userRouter.js';
import orderRouter from './orderRouter.js';

const router = Router();

router.use('/products', productRouter);
router.use('/order', orderRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;