import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Root_Layout from './root_layout/RootLayout';
import Home from './pages/Home'
import About from './pages/About';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
  

     <Route path='/' element={<Root_Layout/>}>

     <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />

     </Route>
      
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App
