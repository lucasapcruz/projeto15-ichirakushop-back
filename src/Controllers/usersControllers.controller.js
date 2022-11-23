import { registeredUsers, onlineUsers } from "../db/index.js";

export async function signUp(req,res){

    const user = res.locals.user

    try{
        await registeredUsers.insertOne(user)
        res.status(201).send("usuario registrado!")
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}