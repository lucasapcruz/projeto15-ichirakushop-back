import { Router } from "express";
import productRoute from "./productRoutes.js";
import userRoute from "./usersRoutes.js";

const router = Router()

router.use(userRoute)
router.use(productRoute)

export default router