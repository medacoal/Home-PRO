import React from 'react'
import Footer from '../components/layout/Footer';
import Jumbotron from '../components/Jumbotrun'
import Getin from "../components/contactcomponents/Getin"


const Contact = () => {
  return (
    <div>
      <div className='md:pt-32 pt-10'>
      <Jumbotron title="Have any Questions?" description="We are available, contact us"/>
      <Getin/>
      </div>
      <Footer/>
    </div>
  )
}


export default Contact