import express from "express";
import {
    // addShoppingCard,
     listShoppingCard} from "../controllers/shoppingCard-controller.mjs";

     
     const router = express.Router();
     
     router.route('/').get(listShoppingCard);
     // router.route("/").post(addShoppingCard); 
     
   
     export default router;