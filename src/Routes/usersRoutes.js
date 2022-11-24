import { Router } from "express";
import { signIn, signUp } from "../Controllers/users.controller.js";
import { signInValidation } from "../Middlewares/signInValidation.middleware.js";
import { signUpValidation } from "../Middlewares/signUpSchemaValidation.middleware.js";

const userRoute = Router()

userRoute.post("/sign-up",signUpValidation,signUp)
userRoute.post("sign-in", signInValidation, signIn)


export default userRoute