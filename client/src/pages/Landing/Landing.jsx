import React from 'react'
import LayOut from '../../Components/Layaout/LayOut';
import Carousel from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
// import Footer from "../../components/Footer/Footer"



const Landing = () => {
  return (
    <LayOut >
      <Carousel />
      <Category />
      <Product />
      {/* <Footer/> */}
    </LayOut>
  )
}

export default Landing;