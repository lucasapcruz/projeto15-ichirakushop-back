import { Router } from "express";
import cartRoute from "./cartRoutes.js";
import ordersRoute from "./ordersRoutes.js";
import productRoute from "./productRoutes.js";
import userRoute from "./usersRoutes.js";

const router = Router()

router.use(userRoute)
router.use(ordersRoute)
router.use(productRoute)
router.use(cartRoute)

export default router