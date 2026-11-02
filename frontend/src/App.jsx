import { Route, Routes } from "react-router"
import MealList from "./pages/dinners/MealList"
import MealCreate from "./pages/dinners/MealCreate"
import MealUpdate from "./pages/dinners/MealUpdate"

export default function App () {
  return(
    <>
        <Routes>
            <Route path="/" element={<MealList />} />
            <Route path="/create" element={<MealCreate />} />
            <Route path="/meal/:id" element={<MealUpdate />} />

        </Routes>
    </>
  )
}