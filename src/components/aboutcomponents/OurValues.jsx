import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import icon from "../../assets/icons/Group.png"

const OurValues = () => {
  return (
   <Wrapper>
 <div className='flex flex-col lg:flex-row lg:p-8 lg:gap-48 gap-8 lg:pl-20'>
        <div className='bg-black rounded-3xl lg:w-[510px] w-full'>
        <h1 className='lg:text-4xl text-3xl text-[#FFFFFF] mx-16 my-8 font-semibold'> Our Values</h1>
        <div className='py- mx-8 my-4 '>
           <div className='flex mx-8'>
          <img src={icon} alt='items.icon' className='h-6'/>
          <p className='text-[#FFFFFF] lg:mx-4 text-2xl'>We operate with honesty and transparency in all our dealings.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon' className=' h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>Our clients are at the heart of everything we do.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon' className='h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>We are committed to delivering the highest quality service.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon'className='h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>We leverage the latest technology to provide a seamless experience.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon'className='h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>We believe in contributing positively to the communities we serve.</p>
        </div>
        </div>
        </div>


        <div className='bg-black rounded-3xl border lg:w-[510px] w-full '>
        <h1 className='lg:text-4xl text-3xl text-[#FFFFFF] mx-16 my-8 font-semibold'> Why Choose Us?</h1>
        <div className='py- mx-8 my-4 '>
           <div className='flex mx-8'>
          <img src={icon} alt='items.icon' className='h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>With years of experience in the real estate market, we have the knowledge and skills to guide you through any transaction.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon' className=' h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>We have an in-depth understanding of the local property market and can offer insights that others can’t.</p>
        </div>
        <div className='flex mx-8 my-4'>
          <img src={icon} alt='items.icon' className='h-6'/>
          <p className='text-[#FFFFFF] mx-4 text-2xl'>We are skilled negotiators, committed to getting you the best deal possible. From the first consultation to closing the deal, we are with you every step of the way.</p>
        </div>
        </div>
        </div>
    </div>
   </Wrapper>
  )
}

export default OurValues