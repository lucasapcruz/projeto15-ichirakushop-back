import joi from "joi"

const productsSchema = joi.object({
    productId: joi.string().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
    productQt: joi.number().integer().required().min(1),
})

export const cartCreationSchema = joi.object({
    products: joi.array().items(productsSchema).required().min(1)
})
