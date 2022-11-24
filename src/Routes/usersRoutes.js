import { Router } from "express";
import { getUser, signIn, signUp } from "../Controllers/users.controller.js";
import { authRoutesValidation } from "../Middlewares/authRoutesValidation.middleware.js";
import { signInValidation } from "../Middlewares/signInValidation.middleware.js";
import { signUpValidation } from "../Middlewares/signUpSchemaValidation.middleware.js";

const userRoute = Router();

userRoute.post("/sign-up", signUpValidation, signUp);
userRoute.post("/sign-in", signInValidation, signIn);
userRoute.get("/user", authRoutesValidation, getUser);

export default userRoute;
