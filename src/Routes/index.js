import { Router } from "express";
import ordersRoute from "./ordersRoutes.js";
import productRoute from "./productRoutes.js";
import userRoute from "./usersRoutes.js";

const router = Router()

router.use(userRoute)
router.use(ordersRoute)
router.use(productRoute)

export default router