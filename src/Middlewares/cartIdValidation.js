export async function cartIdValidation(req,res,next){
    const {cartId} = req.params

    if (!cartId){
        res.sendStatus(401)
    }

    next()
}