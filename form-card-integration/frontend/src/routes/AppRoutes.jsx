import Form from "../screen/Form"
import { Route, Routes } from "react-router"
import CardsScreen from "../screen/CardsScreen"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/cards" element={<CardsScreen/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
