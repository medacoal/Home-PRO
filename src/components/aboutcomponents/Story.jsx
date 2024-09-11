import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import images from "../../assets/images/Rectangle 2.png"

const Story = () => {
  return (
    <Wrapper>
    <div className='flex flex-col lg:flex-row py-5 lg:gap-24'>
    <div className='text-center lg:text-start'>
        <h1 className='text-5xl font-bold font-[Avenir LT Std]'>Our Story</h1>
        <p className='text-2xl lg:w-[700px] py-8 font-semibold w-full'>Our journey began with a simple goal: to transform the property buying and selling experience. Founded by a group of passionate real estate experts, our company has grown to become a trusted name in the industry. Over the years, we have expanded our services, embracing new technologies and market trends, while staying true to our core values. Today, we are proud to have helped thousands of families find their perfect home and countless investors make profitable decisions.</p>
    </div>
    <div>
        <img src={images} alt='system' className='w-[519.48px] h-[401.98px] md:w-full'/>
    </div>
</div>
</Wrapper>
)
}

export default Story