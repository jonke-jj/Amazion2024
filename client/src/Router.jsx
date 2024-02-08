import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Payment from "./pages/Payment/Payment"
import Orders from "./pages/Orders/Orders"
import Results from './pages/Results/Result';
import ProductDetail from "./pages/ProductDetail/ProductDetail"

const Routing = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/payments' element={<Payment />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/category/:categoryName' element={<Results/>} />
          <Route path='/products/:productId' element={<ProductDetail />}/>
      </Routes>
    </Router>
  )
}

export default Routing;