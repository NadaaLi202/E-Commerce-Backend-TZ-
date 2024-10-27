import Joi from "joi";

 export const signUpSchema = Joi.object({

    name: Joi.string()
    .min(3)
    .max(50)
    .required(),

    email: Joi.string()
    .email()
    .required(),

    password: Joi.string()
    .required()
    .min(6)
    .pattern(new RegExp(/^[a-zA-Z0-9]{6,}$/)),

    role: Joi.string()
    .valid("user","admin")
    .default("user")

})