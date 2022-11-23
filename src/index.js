import express, { json } from "express"
import cors from "cors"
import router from "./Routes/index.js"

const app = express()
app.use(cors())
app.use(json())
app.use(router)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));