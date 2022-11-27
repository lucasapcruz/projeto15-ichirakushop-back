import { ObjectId } from "mongodb";
import { orders } from "../database/db.js";

export async function createCart(req, res) {
    const user = res.locals.user;
    const userId = user._id.toString()
    const { products } = req.body

    try {

        let totalPrice = 0;
        products.forEach(element => {
            totalPrice += element.price
        });

        const cart = { userId, ...payload }
        await orders.insertOne(orderRecord);
        res.status(201).send(orderRecord);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateCart(req, res) {
    const user = res.locals.user;
    const orderId = req.params.orderId
    const updatePayload = req.body


    let newTotalPrice = 0;

    updatePayload.forEach(element => {
        newTotalPrice += element.price
    });

    try {
        await orders
            .updateOne({
                _id: new ObjectId(orderId)
            },
                {
                    $set: {
                        products: updatePayload,
                        totalPrice: newTotalPrice,
                        updatedDate: Date.now()
                    }
                })

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500);
    }

}


export async function getCart(req, res) {
    const user = res.locals.user;

    const limit = req.query.limit;

    console.log(user._id)
    try {

        const cart = await orders
            .findOne({
                userId: user._id.toString(),
                isFinished: false
            })
        res.status(200).send(cart);

    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteCart(req, res) {
    const user = res.locals.user;
    const orderId = req.params.orderId

    try {
        await orders
            .deleteOne({
                _id: new ObjectId(orderId)
            })

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500);
    }

}