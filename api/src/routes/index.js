import express from 'express';
import productsRouter from './products.js';

const router = express.Router();

router.use('/products', productsRouter);
router.get('/', (req, res) => res.end('Hello World!'));

export default router;