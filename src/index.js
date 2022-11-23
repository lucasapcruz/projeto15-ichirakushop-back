import express, { json } from "express"
import cors from "cors"
import router from "./Routes/index.js"

const app = express()
app.use(cors())
app.use(json())
app.use(router)


app.listen(5000)