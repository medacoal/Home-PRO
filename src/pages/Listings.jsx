import React from 'react'
 import Footer from '../components/layout/Footer'
import Jumbotron from '../components/Jumbotrun'
import Properites from '../components/listingcomponents/Properties'
import { Pagination } from '../components/Pagination'

const Listings = () => {
  return (
    <div>
     <div className='md:pt-32 pt-10'>
     <Jumbotron title="Find the Best Properties" description="Discover a wide range of exclusive properties tailored to your unique preferences."/>
     </div>
      <Properites/>
      <Pagination/>
      <Footer/>
    </div>
  )
}


export default Listings
