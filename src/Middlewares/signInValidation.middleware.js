import { registeredUsers } from "../database/db.js"
import bcrypt from "bcrypt"

export async function signInValidation(req,res,next){

    const user = req.body

    const userExist = await registeredUsers.findOne({email:user.email})
    if(!userExist){
        return res.status(401).send("email não cadastrado")
    }

    const passwordOK = bcrypt.compareSync(user.password, userExist.password)

    if(!passwordOK){
        return res.status(401).send("senha incorreta")
    }

    res.locals.user = userExist

    next()
}