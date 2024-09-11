import React from 'react'
import rec from "../../assets/images/Rectangle 3.png"
import Wrapper from '../resusables/ComponentWrapper'

const OurMission = () => {
  return (
   <Wrapper>
     <div className='flex flex-col lg:flex-row  lg:gap-24 py-5 text-center lg:text-start'>
     <div className=''>
        <img src={rec} alt='rec'className='w-[519.48px] h-[401.98px] md:w-full '/>
    </div>
    <div>
        <h1 className='text-5xl font-bold font-[Avenir LT Std] py-6'>Our Mission</h1>
        <p className='text-2xl lg:w-[700px]  font-semibold w-full'>Our mission is to connect people with their perfect properties. We believe in transparency, trust, and going the extra mile to ensure that every client finds a place they can truly call home. We strive to make the property buying process as straightforward and stress free as possible.</p>
    </div>
     </div>
   </Wrapper>
  )
}

export default OurMission