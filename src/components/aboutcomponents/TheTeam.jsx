import React from 'react'
import john from "../../assets/images/Frame 138.png"
import issac from "../../assets/images/Frame 141.png"
import gina from "../../assets/images/Frame 142.png"
import Wrapper from '../resusables/ComponentWrapper'

const TheTeam = () => {
  return (
    <Wrapper>
        <div className='py-5 lg:p-10'>
       <div className='py-3'>
       <h1 className='text-center text-4xl font-bold text-[#000000]'>Meet The Team</h1>
       <p className='text-[#000000] text-2xl text-center py-4'>Behind our success is a team of experienced, dedicated, and friendly professionals. Each team member brings a wealth of knowledge and a unique perspective to the table, ensuring that we can meet all your real estate needs. Get to know the people who make it all happen.</p>
       </div>

       <div className='flex flex-col lg:flex-row gap-3'>
       <div className='relative'>
        <img src={john}alt='john' className='w-full'/>
        <div className='absolute inset-0 flex flex-col items-center justify-end text-center text-[#FFFFFF] rounded-2xl p-6'>
        <h1 className='text-xl '>Priscilla John</h1>
        <h2 className='text-xl'>C.E.O</h2>
        </div>
       </div>

       
       <div className='relative'>
        <img src={issac}alt='issac' className='w-full'/>
       <div className='absolute inset-0 flex flex-col items-center justify-end text-center text-[#FFFFFF] rounded-2xl p-6'>
        <h1 className='text-xl '>Gabriel Isaac</h1>
        <h2 className='text-xl'>C.O.O</h2>
        </div>
</div>
      
<div className='relative'>
        <img src={gina}alt='gina' className='w-full'/>
        <div className='absolute inset-0 flex flex-col items-center justify-end text-center text-[#FFFFFF] rounded-2xl p-6'>
        <h2 className='text-xl '>Gina Konsworth</h2>
        <h2 className='text-xl'>Marketing Manager</h2>
        </div>
       </div>

</div>
    </div>
    </Wrapper>
  )
}
export default TheTeam