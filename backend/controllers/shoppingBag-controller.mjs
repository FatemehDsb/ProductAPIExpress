import express from "express";
// import {listProducts, findProducts} from '../controllers/products-controller.mjs'

const router = express.Router();


router.route('/').get();

router.route('/:id').get();


export default router;