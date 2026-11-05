import { useState } from "react"
import api from "../../../lib/axios"
import { Link, useNavigate } from "react-router"

export default function MealCreate () {
    const [name, setName] = useState("")
    const [meat_type, setMeatType] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        if(!name.trim() || !meat_type.trim()){
            return
        }
        try {
            await api.post("/dinners", {
                name,
                meat_type
            })
            navigate("/dinners")
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <Link to={"/dinners"}> Go Back </Link>
            <h2>Add New Meal</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name</span>
                </label>
                <input type="text"
                placeholder="Meal Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <label>
                    <span>Meat Type</span>
                </label>
                <input type="text"
                placeholder="Meat type"
                value={meat_type}
                onChange={(e)=> setMeatType(e.target.value)}
                />
                <button type="submit">Add Meal</button>
            </form>
        </>
    )
}