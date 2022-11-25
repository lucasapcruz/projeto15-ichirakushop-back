import { ObjectId } from "mongodb";
import { orders } from "../database/db.js";

export async function createOrder(req, res) {
    const user = res.locals.user;
    console.log(user)
    const order = req.body

    const orderRecord = { ...order, createdDate: Date.now(), finishedDate: Date.now(), updatedDate: Date.now() }

    try {
        await orders.insertOne(orderRecord);
        res.status(201).send(orderRecord);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateOrder(req, res) {
    const user = res.locals.user;
    const updatePayload = req.body
    console.log(updatePayload)

    try {
        await orders
            .updateOne({
                _id: new ObjectId(updatePayload.orderId)
            },
                {
                    $set: {
                        products: updatePayload.products,
                        totalPrice: updatePayload.totalPrice,
                        isFinished: updatePayload.isFinished,
                        updatedDate: Date.now()
                    }
                })

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500);
    }

}

export async function getOrders(req, res) {
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

    // try {
    //     if (limit) {
    //         const orders = await orders
    //             .find({ userId: user._id })
    //             .sort({ finishedDate: -1 })
    //             .limit(parseInt(limit))
    //             .toArray();
    //         res.status(200).send(orders);
    //         return;
    //     }

    //     const messages = await db
    //         .collection("messages")
    //         .find({
    //             $or: [{ to: participant }, { from: participant }],
    //         })
    //         .sort({ time: -1 })
    //         .toArray();
    //     res.status(200).send(messages);
    // } catch (error) {
    //     res.sendStatus(500);
    // }
}

// await orders
//     .updateOne({
//         _id: new ObjectId(updatePayload.orderId)
//     },
//         {
//             $set: {
//                 products: updatePayload.products,
//                 totalPrice: updatePayload.totalPrice,
//                 isFinished: updatePayload.isFinished,
//                 updatedDate: Date.now()
//             },
//         }
//         // {
//         //     $set: {
//         //         finishedDate: {
//         //             $cond: {
//         //                 if: { $isFinished },
//         //                 then: $updatedDate,
//         //                 else: $finishedDate
//         //             }
//         //         }
//         //     }
//         // }])
//     )
