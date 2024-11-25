import express from "express";
import {listShoppingBag, findShoppingBag} from '../controllers/shoppingBag-controller.mjs'

const router = express.Router();


router.route('/').get(listShoppingBag);

router.route('/:id').get(findShoppingBag);


export default router;