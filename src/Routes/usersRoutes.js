import { Router } from "express";
import { signUp } from "../Controllers/users.controller.js";
import { signUpValidation } from "../Middlewares/signUpSchemaValidation.middleware.js";

const userRoute = Router()

userRoute.post("/sign-up",signUpValidation,signUp)


export default userRoute