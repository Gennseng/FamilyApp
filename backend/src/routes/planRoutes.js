import express from "express"
import { getMealPlan, getRandomMeal, addMeal, clearPlan } from "../controllers/mealsController.js"
const router = express.Router()

router.get("/list", getMealPlan)
router.get("/", getRandomMeal)
router.post("/", addMeal)
router.delete("/list", clearPlan)

export default router