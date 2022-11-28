import { Router } from "express";
import { getProducts, getProductsById } from "../Controllers/products.controller.js";
import userRoute from "./usersRoutes.js";


const productRoute = Router();

userRoute.get("/products", getProducts)
userRoute.get("/products/:productId", getProductsById)

export default productRoute;