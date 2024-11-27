import express from "express";
import {listdecorations, finddecorations} from '../controllers/decorations-controller.mjs'

const router = express.Router();


router.route('/').get(listdecorations);

router.route('/:id').get(finddecorations);


export default router;