import Router from 'express';
import productRouter from './productsRouter.js';
import authRouter from './authRouter.js';
import userRouter from './userRouter.js'

const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;