import { Link } from "react-router"

export default function Meal(meal) {
    return(
        <div>
            <Link to={`/dinners/${meal.meal.meal_id}`}>
                <h3>{ meal.meal.name }</h3>
                <p>{ meal.meal.meat_type }</p>
                { meal.meal.book && meal.meal.page && <p>{ meal.meal.book } p.{ meal.meal.page }</p>}
            </Link>
            
        </div>
    )
}