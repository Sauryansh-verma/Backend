import Navbar from "./components/Navbar"
import Cards from "./screen/Cards"
import Form from "./screen/Form"
import {Routes, Route} from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/cards" element={<Cards/>}/>
      </Routes>      
    </div>
  )
}

export default App
