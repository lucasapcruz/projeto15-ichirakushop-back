import { onlineUsers, registeredUsers } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
  const user = res.locals.user;

  try {
    await registeredUsers.insertOne(user);
    res.status(201).send("usuario registrado!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const userExist = res.locals.user;
  const token = uuidV4();

  try {
    await onlineUsers.insertOne({
      token,
      userId: userExist._id,
      lastStatus: Date.now(),
    });

    res.status(200).send(token);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
