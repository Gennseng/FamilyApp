import express from "express"
import { getAllMeals, createMeal, getMeal, updateMeal, deleteMeal } from "../controllers/mealsController.js"
const router = express.Router()

router.get("/", getAllMeals)
router.get("/:id", getMeal)
router.post("/", createMeal)
router.put("/:id", updateMeal)
router.delete("/:id", deleteMeal)

export default router