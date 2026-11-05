import { Link } from "react-router"

export default function Navbar() {
    return(
        <>
            <Link to={"/dinners/create"}>Add a Meal</Link>
        </>
    )
}