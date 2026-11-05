import pool from "../db.js"

// -= MEAL LIST CONTROLLERS =-
// GET - Read
export async function getAllMeals (req, res) {
    try {
        const meals = await pool.query('SELECT * FROM meals')
        res.status(200).json(meals.rows)
    } catch (error) {
        console.log("Error getting meals, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}
// Get meal by specific ID
export async function getMeal (req,res) {
    try {
        const meal = await pool.query('SELECT * FROM meals WHERE meal_id = $1', [req.params.id])
        if (!meal) return res.status(404).json({ message: "No meal found!" })
        res.json(meal.rows)
    } catch (error) {
        console.log("Error getting specific meal, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// POST - Create
export async function createMeal (req, res) {
    try {
        const {name, meat_type} = req.body
        const newMeal = await pool.query('INSERT INTO meals(name, meat_type) VALUES($1, $2) RETURNING *', [name, meat_type])
        res.status(201).json(newMeal.rows[0])
    } catch (error) {
        console.log("Error creating meal, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// PUT - Update
export async function updateMeal (req,res) {
    try {
        const {name, meat_type} = req.body
        const updatedMeal = await pool.query('UPDATE meals SET name = $1, meat_type = $2 WHERE meal_id = $3 RETURNING *', [name, meat_type, req.params.id])
        if (!updatedMeal) return res.status(404).json({ message: "No meal found!" })
        res.status(200).json(updatedMeal.rows[0])
    } catch(error) {
        console.log("Error updating meal, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// DELETE
export async function deleteMeal (req,res) {
    try {
        const deletedMeal = await pool.query('DELETE FROM meals WHERE meal_id = $1', [req.params.id])
        res.status(200).json({ message: "Successfully deleted meal!" })
    } catch(error) {
        console.error("Error deleting meal, ")
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// -= MEAL PLAN CONTROLLERS =-
// GET meal plan
export async function getMealPlan (req, res) {
    try {
        const meals = await pool.query('SELECT * FROM meal_plan')
        res.status(200).json(meals.rows)
    } catch (error) {
        console.log("Error getting meals, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// GET random meal, based on conditions
export async function getRandomMeal (req, res) {
    try {
        const meal = await pool.query('SELECT * FROM meals ORDER BY RANDOM() LIMIT 1')
        res.status(200).json(meal.rows)
    } catch (error) {
        console.log("Error retrieving meal, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// Insert meal into meal plan
export async function addMeal (req, res) {
    try {
        const {meal_id} = req.body
        const addedMeal = await pool.query('INSERT INTO meal_plan(meal_id) VALUES($1) RETURNING *', [meal_id])
        res.status(201).json(addedMeal.rows[0])
    } catch (error) {
        console.log("Error creating meal, ", error)
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}

// Clear meal plan
export async function clearPlan (req,res) {
    try {
        await pool.query('DELETE FROM meal_plan')
        res.status(200).json({ message: "Successfully cleared meal plan!" })
    } catch(error) {
        console.error("Error deleting meal, ")
        res.status(500).json({ message:"500 Internal Server Error (This means it's not your fault! Don't panic!)" })
    }
}