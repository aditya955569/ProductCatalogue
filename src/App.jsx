import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import First from "../Pages/First";
import Categories from "../Pages/Categories";
import Product from "../Pages/Product";
function App() {  
  return (
    
    <>
      <BrowserRouter>
      <Routes>
          <Route index  element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/products' element={<First/>}/>
          <Route path="/products/:productId" element={<Product/>}/>
          <Route path='/categories' element={<Categories/>}/>
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
