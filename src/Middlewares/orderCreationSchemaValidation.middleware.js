import { orderCreationSchema } from "../Models/orderCreationSchema.model.js"

export async function orderCreationValidation(req, res, next) {
    const order = req.body

    const {error} = orderCreationSchema.validate(order,{abortEarly:false})

    if(error){
        const errors = error.details.map(detail => detail.message)
        return res.status(422).send(errors)
       }

    next()

}