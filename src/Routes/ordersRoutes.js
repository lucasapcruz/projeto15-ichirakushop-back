import { Router } from "express";
import { createOrder, updateOrder, getOrders } from "../Controllers/orders.controller.js";
import { authRoutesValidation } from "../Middlewares/authRoutesValidation.middleware.js";
import { orderCreationValidation } from "../Middlewares/orderCreationSchemaValidation.middleware.js";

const ordersRoute = Router();

ordersRoute.post("/order", authRoutesValidation, orderCreationValidation, createOrder);
ordersRoute.put("/order", authRoutesValidation, updateOrder);
ordersRoute.delete("/order", authRoutesValidation, updateOrder);
ordersRoute.get("/orders", authRoutesValidation, getOrders);

export default ordersRoute;