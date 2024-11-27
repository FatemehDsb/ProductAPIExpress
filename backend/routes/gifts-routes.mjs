import express from "express";
import {listgifts, findgifts} from '../controllers/gifts-controller.mjs'

const router = express.Router();


router.route('/').get(listgifts);

router.route('/:id').get(findgifts);


export default router;