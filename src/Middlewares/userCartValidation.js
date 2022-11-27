import { onlineUsers, registeredUsers } from "../database/db.js";

export async function userCartValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    res.locals.userId = ""
    return next();
  }

  try {
    const session = await onlineUsers.findOne({ token });
    const user = await registeredUsers.findOne({ _id: session.userId });
    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user._id;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
