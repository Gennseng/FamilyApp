import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router"
import api from "../../../lib/axios"

export default function MealUpdate () {
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        async function getMeal() {
            try {
                const res = await api.get(`/${id}`)
                setMeal(res.data[0])
            } catch (error) {
                console.log("Error getting meal, ",error)
            } finally {
                setLoading(false)
            }
        }
        getMeal()
    }, [id])

    async function handleDelete() {
        if(!window.confirm("Delete this meal?")) return
        try {
            await api.delete(`/${id}`)
            navigate("/")
        } catch(error) {
            console.log(error)
        }
    }

    async function handleSave() {
        if(!meal.name.trim() || !meal.meat_type.trim()) {
            return
        }
        try {
            await api.put(`/${id}`, meal)
            navigate("/")
        } catch(error) {
            console.log(error)
        }
    }
    if (loading) {
        return (
            <div>
                <p> chill for a bit </p>
            </div>
        )
    }
    return (
        <>
            <Link to={"/"}> Go Back </Link>
            <button onClick={handleDelete}>Delete</button>
            <h2>Update Meal</h2>
            <label>
                <span>Name</span>
            </label>
            <input type="text"
            placeholder="Meal Name"
            value={meal.name}
            onChange={(e)=> setMeal({ ...meal, name: e.target.value })}
            />
            <label>
                <span>Meat Type</span>
            </label>
            <input type="text"
            placeholder="Meat type"
            value={meal.meat_type}
            onChange={(e)=> setMeal({ ...meal, meat_type: e.target.value })}
            />
            <button onClick={handleSave}>Save Changes</button>

        </>
    )
}