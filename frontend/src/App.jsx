import { Route, Routes } from "react-router"
import MealList from "./pages/dinners/MealList"
import MealCreate from "./pages/dinners/MealCreate"
import MealUpdate from "./pages/dinners/MealUpdate"

export default function App () {
  return(
    <>
        <Routes>
            <Route path="/dinners" element={<MealList />} />
            <Route path="/dinners/create" element={<MealCreate />} />
            <Route path="/dinners/:id" element={<MealUpdate />} />

        </Routes>
    </>
  )
}