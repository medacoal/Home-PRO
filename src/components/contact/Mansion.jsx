import React from 'react'
import Wrapper from '../resusables/ComponentWrapper';
import room from "../../assets/images/Frame 178.png"
import chair from "../../assets/images/Frame 179.png"
import bed from "../../assets/images/Frame 180.png"
import grass from "../../assets/images/Frame 181.png"
import video from "../../assets/images/Frame 37 (10).png"

const Mansion = () => {
  return (
   <Wrapper>
<div className='flex gap-5 w-full text-center lg:text-start flex-col md:flex-row'>
<div className=''>
        <h1 className='font-bold text-3xl '>Mansion in Asokoro</h1>
        <p className='w-[371px]'>No 23, Ajayi Crowther Street</p>
        <div className='grid grid-cols-2 md:w-[500px] gap-3 py-5'>
          <img src={room}alt='room'/>
          <img src={chair}alt='chair'/>
          <img src={bed}alt='beds'/>
          <img src={grass}alt='grass'/>
        </div>
    </div>
    <div className='md:py-20 '>
      <img src={video}alt='video' className='md:w-[1000px] md:h-[450px] '/>
    </div>
</div>
   </Wrapper>
  ) 
}

export default Mansion;