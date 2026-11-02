export default function Meal(meal) {
    console.log(meal)
    return(
        <div>
            <h3>{ meal.meal.name }</h3>
            <p>{ meal.meal.meat_type }</p>
        </div>
    )
}