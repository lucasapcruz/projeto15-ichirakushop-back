import { Router } from "express";
import userRoute from "./usersRoutes.js";

const router = Router()

router.use(userRoute)

export default router