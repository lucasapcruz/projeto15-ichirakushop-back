import { cartCreationSchema } from "../Models/cartCreationSchema.model.js"


export async function cartCreationValidation(req, res, next) {
    const cart = req.body

    const {error} = cartCreationSchema.validate(cart,{abortEarly:false})

    if(error){
        const errors = error.details.map(detail => detail.message)
        return res.status(422).send(errors)
       }

    next()

}