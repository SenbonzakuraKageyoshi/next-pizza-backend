import Router from 'express';
import productRouter from './productsRouter.js';

const router = Router();

router.use('/products', productRouter);

export default router;