import { orders } from "../database/db.js";

export async function createOrder(req, res) {
  const user = res.locals.user;
  const order = req.body

  try {
    await orders.insertOne(order);
    res.status(201).send("Pedido criado!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function updateOrder(req, res) {
  const user = res.locals.user;
}

export async function getOrders(req, res) {
  const user = res.locals.user;
}
