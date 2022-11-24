import joi from "joi"

export const signUpSchema = joi.object({
    name:joi.string().required().min(3),
    email:joi.string().required().email(),
    password: joi.string().required().min(8),
    repetedPassword: joi.string().required().valid(joi.ref('password')),
    cep:joi.number().required().min(10000000),
    street:joi.string().required(),
    houseNumber: joi.number().required().min(0)
})
