import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing"
import Payment from "./pages/Payment/Payment"
import Orders from "./pages/Orders/Orders"
import Results from './pages/Results/Result';
import Cart from "./pages/Cart/Cart"
import Auth from "./pages/Auth/Auth"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import  ProtectedRoute  from "./Components/ProtectedRoute/ProtectedRoute";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js"

const stripePromise = loadStripe(
'pk_test_51OjxJNDeWRJqZjuIH2tElWt0QCIMzzlpKcCJpvQU65WGVLF5dyrDwQwP0nHxSCi66ED25j1PzzgUe5UN0Ezn7zSY00gLgzQ9VT'
);

function Routing() {
  
  return (
  <Router>
    <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/signin' element={<Auth />} />
    <Route path='/payments' element={<ProtectedRoute 
      msg={"You must log-in to pay first"} redirect={"/payments"}>
      <Elements stripe={stripePromise}>
      <Payment />
      </Elements>
      </ProtectedRoute>
      } />
      <Route path='/orders' element={
      <ProtectedRoute 
        msg={"You must log-in first to access your orders "} redirect={"/orders"}>
      <Orders />
      </ProtectedRoute>
      } />
      <Route path='/category/:categoryName' element={<Results />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
  )
}

export default Routing;