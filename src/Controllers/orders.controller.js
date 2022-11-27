import { ObjectId } from "mongodb";
import { orders } from "../database/db.js";

export async function createOrder(req, res) {
    const user = res.locals.user;
    const userId = user._id.toString()
    const {cartId} = req.body

    const orderRecord = {
        userId,
        cartId,
        createdDate: Date.now(),
        updatedDate: Date.now()
    }

    try {
        await orders.insertOne(orderRecord);
        res.status(201).send(orderRecord);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getOrders(req, res) {
    const user = res.locals.user;
    const userId = user._id.toString()
    const limit = req.query.limit;

    try {

        const ordersArray = await orders
            .findOne({
                userId
            })
        res.status(200).send(cart);

    } catch (error) {
        res.sendStatus(500);
    }
}