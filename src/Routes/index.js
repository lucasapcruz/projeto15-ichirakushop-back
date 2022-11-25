import { Router } from "express";
import ordersRoute from "./ordersRoutes.js";
import userRoute from "./usersRoutes.js";

const router = Router()

router.use(userRoute)
router.use(ordersRoute)

export default router