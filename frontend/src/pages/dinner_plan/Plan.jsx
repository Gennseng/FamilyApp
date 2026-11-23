import { useState, useEffect } from "react";
import api from "../../../lib/axios";
import Navbar from "../../components/Navbar";
import Meal from "../../components/Meal";

export default function Plan() {
    const [plan, setPlan] = useState([])

    useEffect(() => {
        async function fetchPlan() {
            try {
                const res = await api.get("/plan/list")
                setPlan(res.data)
            } catch (error) {
                console.log("Error fetching meal plan", error)
            }
        }
        fetchPlan()
    }, [])  

    return(
        <div>
            <Navbar />
            
            { plan.length > 0 && (
                <div>
                    {plan.map((meal)=> (
                        <Meal key={ meal.meal_id } meal={meal}/>
                    ))}
                </div>
            )}
            
            { plan.length == 0 && <p>no plan here boss</p>}
        </div>
    )
}


