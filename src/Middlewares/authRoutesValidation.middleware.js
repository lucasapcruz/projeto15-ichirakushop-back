import { onlineUsers, registeredUsers } from "../database/db.js";

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await onlineUsers.findOne({ token });
    const user = await registeredUsers.findOne({ _id: session.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
