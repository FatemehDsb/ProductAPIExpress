import express from "express";
import {listProducts, findProducts} from '../controllers/products-controller.mjs'

const router = express.Router();


router.route('/').get(listProducts);

router.route('/:id').get(findProducts);


export default router;