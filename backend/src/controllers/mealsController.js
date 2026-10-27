import pool from "../db.js"

export async function getAllMeals (req, res) {
    try {
        const meals = await pool.query('SELECT * FROM meals')
        res.status(200).json(meals)
    } catch (error) {
        console.log("Error getting meals", error)
        res.status(500).json({message:"Error retrieving meals"})
    }
}