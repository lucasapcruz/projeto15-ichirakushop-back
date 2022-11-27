import joi from "joi"

export const orderCreationSchema = joi.object({
    cartId: joi.string().required().pattern(new RegExp('^[0-9a-fA-F]{24}$'))
})
