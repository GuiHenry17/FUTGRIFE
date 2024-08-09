import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Produtos from './Produtos'
import Ofertas from './Ofertas'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/ofertas' element={<Ofertas />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)



