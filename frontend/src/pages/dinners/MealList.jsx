import Navbar from "../../components/Navbar.jsx"
import { useState, useEffect } from "react"
import api from "../../../lib/axios.js"
import Meal from "../../components/Meal.jsx"

export default function MealList () {
    const [meals, setMeals] = useState([])

    useEffect(()=>{
        async function fetchMeals() {
            try {
                const res = await api.get("/dinners")
                setMeals(res.data)
            } catch (error) {
                console.log("Error fetching meals", error)
            }
        }
        fetchMeals()
    }, [])


    return(
        <div>
            <Navbar />
            {meals.length > 0 && (
                <div>
                    {meals.map((meal) => (
                        <>
                            <Meal key={meal.meal_id} meal={meal} />
                        </>
                    ))}
                </div>
            )}
        </div>
  )
}