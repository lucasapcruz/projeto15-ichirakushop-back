import { ObjectId } from "mongodb"
import { productsCollection } from "../database/db.js"

export async function getProducts(req,res){
    
    const isBestSeller = req.query.tag

    function compareAvailable(a,b){
        if (a.availableQt>b.availableQt){
            return 1
        }
        if (a.availableQt<b.availableQt){
            return -1
        }
        return 0
    }
    try{

        const products = await productsCollection.find({ availableQt : { $gt : 0 } }).toArray()

        if(isBestSeller === "bestSeller"){
            const bestSellers = products.sort(compareAvailable).slice(0,2)
            return res.send(bestSellers)
            
        }
        
        res.send(products)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getProductsById(req,res){

    const {productId} = req.params

    try{

        const product = await productsCollection.findOne({ _id : new ObjectId(productId) })

        res.send(product)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

