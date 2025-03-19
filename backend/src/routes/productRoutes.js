import express from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/product', getProducts);
router.post('/product', addProduct);

export default router;