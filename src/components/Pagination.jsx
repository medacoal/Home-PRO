import React from 'react'
import frame from "../assets/icons/Frame 175.png"
import frame2 from "../assets/icons/Frame 172.png"
import frame3 from "../assets/icons/Frame 173.png"
import frame4 from "../assets/icons/Frame 174.png"
import frame5 from "../assets/icons/Frame 176.png"
import frame6 from "../assets/icons/Frame 177.png"
import Wrapper from '../components/resusables/ComponentWrapper'

export const Pagination = () => {
  return (
   <Wrapper>
     <div className='flex gap-5 mx-60  justify-center py-8'>
        <img src={frame} alt='frame'/>
        <img src={frame2} alt='frame2'/>
        <img src={frame3} alt='frame3'/>
        <img src={frame4} alt='frame4'/>
        <img src={frame5} alt='frame5'/>
        <img src={frame6} alt='frame6'/>
        
    </div>
   </Wrapper>
  )
}