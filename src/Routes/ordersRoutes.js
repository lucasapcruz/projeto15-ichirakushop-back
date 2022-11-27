import { Router } from "express";
import { deleteOrder } from "../Controllers/orders.controller.js";
import { createOrder, updateOrderProducts, updateOrderStatus, getOrders } from "../Controllers/orders.controller.js";
import { authRoutesValidation } from "../Middlewares/authRoutesValidation.middleware.js";
import { orderCreationValidation } from "../Middlewares/orderCreationSchemaValidation.middleware.js";

const ordersRoute = Router();

ordersRoute.post("/order", authRoutesValidation, orderCreationValidation, createOrder);
ordersRoute.get("/orders", authRoutesValidation, getOrders);

export default ordersRoute;