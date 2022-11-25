import joi from "joi"

const productsSchema = joi.object({
    productId: joi.string().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
    productQt: joi.number().integer().required().min(1),
    price:  joi.number().required().precision(2)
})

export const orderCreationSchema = joi.object({
    userId: joi.string().required().pattern(new RegExp('^[0-9a-fA-F]{24}$')),
    products: joi.array().items(productsSchema).required().min(1),
    totalPrice: joi.number().required().precision(2),
    isFinished: joi.boolean().required()
})
