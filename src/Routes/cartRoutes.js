import { Router } from "express";
import { createCart, deleteCart, getCart, getUserCart, updateCart } from "../Controllers/carts.controller.js";
import { authRoutesValidation } from "../Middlewares/authRoutesValidation.middleware.js";
import { cartCreationValidation } from "../Middlewares/cartCreationSchemaValidation.middleware.js";
import { cartIdValidation } from "../Middlewares/cartIdValidation.js";
import { userCartValidation } from "../Middlewares/userCartValidation.js";

const cartRoute = Router();

cartRoute.post("/cart", userCartValidation, cartCreationValidation, createCart);
cartRoute.put("/cart/:cartId/products",cartIdValidation, updateCart);
cartRoute.delete("/cart/:cartId", authRoutesValidation, deleteCart);
cartRoute.get("/cart/:cartId", getCart);
cartRoute.get("/cart", authRoutesValidation, getUserCart);

export default cartRoute;