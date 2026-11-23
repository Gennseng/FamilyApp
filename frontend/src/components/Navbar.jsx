import { Link } from "react-router"

export default function Navbar() {
    return(
        <>
            <Link to={"/dinners"}>Dinners</Link>
            <Link to={"/dinnerplan"}>Dinner Plan</Link>
        </>
    )
}