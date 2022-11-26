import { Router } from "express";
import { getProducts } from "../Controllers/products.controller.js";
import userRoute from "./usersRoutes.js";


const productRoute = Router();

userRoute.get("/products", getProducts)

export default productRoute;