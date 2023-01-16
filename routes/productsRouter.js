import Router from 'express';
import
 {
    getAllProducts,
    selectProduct,
    getAllSelectedProducts,
    incrementSelectedProductsNumber,
    decrementSelectedProductsNumber
 } from '../controllers/productsController/index.js';
import authCheck from '../utils/authCheck.js';

const router = Router();

router.get('/get-products', getAllProducts);
router.post('/select-product', authCheck, selectProduct);
router.post('/get-selected-products', authCheck, getAllSelectedProducts);
router.post('/add-selected-product', authCheck, incrementSelectedProductsNumber);
router.post('/remove-selected-product', authCheck, decrementSelectedProductsNumber);

export default router;