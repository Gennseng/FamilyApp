import express from "express"
import { getAllMeals } from "../controllers/mealsController.js"
const router = express.Router()

router.get("/", getAllMeals)


export default router