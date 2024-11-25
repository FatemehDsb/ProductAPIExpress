import express from "express";
import {listconferences, findconferences} from '../controllers/conferences-controller.mjs'

const router = express.Router();


router.route('/').get(listconferences);

router.route('/:id').get(findconferences);


export default router;