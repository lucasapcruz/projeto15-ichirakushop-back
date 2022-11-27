import { ObjectId } from "mongodb";
import { carts, productsCollection } from "../database/db.js";

export async function createCart(req, res) {
    const userId = res.locals.userId;
    //const user = res.locals.user;
    //const userId = user._id.toString()
    const { products } = req.body

    try {

        const promises = products.map(async (element) => {
            const { price } = await productsCollection.findOne({ _id: new ObjectId(element.productId) })
            return { ...element, price }
        })

        const productsWithPrice = await Promise.all(promises)

        let initialValue = 0
        const totalPrice = productsWithPrice.reduce((totalValue, currentValue) => {
            return totalValue + currentValue.price*currentValue.productQt
        }, initialValue)

        const cart = {
            userId,
            products: productsWithPrice,
            totalPrice,
            createdDate: Date.now(),
            updatedDate: Date.now()
        }
        await carts.insertOne(cart);
        res.status(201).send(cart);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateCart(req, res) {
    const user = res.locals.user;
    const cartId = req.params.cartId
    const { products } = req.body


    try {
        const cart = await carts.findOne({_id: new ObjectId(cartId)})

        const promises = products.map(async (element) => {
            const { price } = await productsCollection.findOne({ _id: new ObjectId(element.productId) })
            return { ...element, price }
        })

        const newProcuctsWithPrice = await Promise.all(promises)
        const producsWithPrice = [...cart.products, ...newProcuctsWithPrice]

        let initialValue = 0
        const newTotalPrice = producsWithPrice.reduce((totalValue, currentValue) => {
            return totalValue + currentValue.price*currentValue.productQt
        }, initialValue)

        await carts
            .updateOne({
                _id: new ObjectId(cartId)
            },
                {
                    $set: {
                        products: producsWithPrice,
                        totalPrice: newTotalPrice,
                        updatedDate: Date.now()
                    }
                })

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }

}


export async function getCart(req, res) {
    const user = res.locals.user;
    const cartId = req.params.cartId
    const limit = req.query.limit;

    //console.log(user._id)
    try {

        const cart = await carts
            .findOne({
                _id: new ObjectId(cartId)
            })
        res.status(200).send(cart);

    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteCart(req, res) {
    const user = res.locals.user;
    const cartId = req.params.cartId

    try {
        await carts
            .deleteOne({
                _id: new ObjectId(cartId)
            })

        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500);
    }

}