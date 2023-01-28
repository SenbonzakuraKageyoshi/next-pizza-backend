import Router from 'express';
import
 {
    getAllProducts,
    selectProduct,
    getAllSelectedProducts,
    incrementSelectedProductsNumber,
    decrementSelectedProductsNumber,
    removeProduct
 } from '../controllers/productsController/index.js';
import authCheck from '../utils/authCheck.js';

const router = Router();

router.get('/get-products', getAllProducts);
router.post('/select-product', authCheck, selectProduct);
router.post('/get-selected-products', authCheck, getAllSelectedProducts);
router.post('/add-selected-product', authCheck, incrementSelectedProductsNumber);
router.post('/remove-selected-product', authCheck, decrementSelectedProductsNumber);
router.post('/delete-selected-product', authCheck, removeProduct);

export default router;