import { Router } from "express";
import { createCart, deleteCart, getCart, updateCart } from "../Controllers/carts.controller.js";
import { authRoutesValidation } from "../Middlewares/authRoutesValidation.middleware.js";
import { cartCreationValidation } from "../Middlewares/cartCreationSchemaValidation.middleware.js";

const cartRoute = Router();

cartRoute.post("/cart", authRoutesValidation, cartCreationValidation, createCart);
cartRoute.put("/cart/:cartId/products", authRoutesValidation, updateCart);
cartRoute.delete("/cart/:cartId", authRoutesValidation, deleteCart);
cartRoute.get("/cart/:cartId", authRoutesValidation, getCart);

export default cartRoute;