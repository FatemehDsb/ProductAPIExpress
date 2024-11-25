import express from "express";
import {listevents, findevents} from '../controllers/events-controller.mjs'

const router = express.Router();


router.route('/').get(listevents);

router.route('/:id').get(findevents);


export default router;