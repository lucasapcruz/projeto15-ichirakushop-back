import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
  mongoClient.connect();
} catch (err) {
  console.log(err);
}

db = mongoClient.db("API_Ichiraku-shop");

const registeredUsers = db.collection("participants");
const onlineUsers = db.collection("session");
const orders = db.collection("orders");
const productsCollection = db.collection("products");
const carts = db.collection("carts");

export {
    registeredUsers,
    onlineUsers,
    orders,
    productsCollection,
    carts
}
