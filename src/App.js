import React from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ProductProvider } from './Components/ProductContext'
import Commodities from './Components/Commodities'
//import AdminProduct from './Components/AdminProduct'
import Admin from './Components/Admin'
/* import Test6 from './Components/Test6'
import Test7 from './Components/Test7'
import Test8 from './Components/Test8'
import Test5 from './Components/Test5'
import Test1 from './Components/Test1'
import Test from './Components/Test' */
import Test from './Components/Test' 
import Test4 from './Components/Test4'
 

const App = () => {
  return (
    <div>
      <ProductProvider>

      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
       {/*  <Route path='/adminproduct' element={<AdminProduct/>}></Route> */}
        <Route path='/admin' element={<Admin/>}></Route>
      {/*   <Route path='/test6' element={<Test6/>}></Route>
        <Route path='/test1' element={<Test1/>}></Route>
        
        <Route path='/test7' element={<Test7/>}></Route>
        <Route path='/test8' element={<Test8/>}></Route>
        <Route path='/test5' element={<Test5/>}></Route>
         
        <Route path='/test' element={<Test/>}></Route> */}
        <Route path='/test' element={<Test/>}></Route>  
        <Route path='/commodities' element={<Commodities></Commodities>}></Route>
        <Route path='/test4' element={<Test4/>}></Route>
      </Routes>
      </BrowserRouter>
      </ProductProvider>
     
    </div>
  )
}

export default App