

import express from "express";
import { signup } from "./user.controller.js";
import { validation } from "../../middleWare/validation.js";
import { signUpSchema } from "./user.validation.js";

const userRouter = express.Router();

userRouter.post('/signup',validation(signUpSchema),signup)

export default userRouter