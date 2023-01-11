import Router from 'express';
import { getAllProducts } from '../controllers/productsController/index.js';

const router = Router();

router.get('/get-products', getAllProducts);

export default router;