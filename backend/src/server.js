import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mealsRoutes from "./routes/mealsRoutes.js"
import planRoutes from "./routes/planRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

// middleware

app.use(cors())
app.use(express.json())
app.use("/dinners", mealsRoutes)
app.use("/plan", planRoutes)


app.listen(port, ()=> {
    console.log("Server started on port", port)
})
