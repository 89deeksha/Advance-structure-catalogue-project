import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'

import ItemDetail from './Pages/ItemDetail'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/item/:name" element={<ItemDetail />} />
    
   </Routes>
   
   </BrowserRouter>
  )
}

export default App