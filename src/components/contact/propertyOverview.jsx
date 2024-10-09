import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import location from "../../assets/icons/Vector (11).png"
import house from "../../assets/icons/Vector (12).png"
import angle from "../../assets/icons/Vector (13).png"
import vec from "../../assets/icons/Vector (14).png"
import sam from "../../assets/images/Ellipse 1.png"

const PropertyOverview = () => {
  return (
    <Wrapper>
        <div className='py-4 w-full flex flex-col lg:flex-row gap-16'>
           <div>
           <div className='py-5 w-full text-center lg:text-start'>
                <h1 className='font-bold text-3xl py-3'>Property OverView</h1>
                <p className='lg:w-[651px] lg:h-[154px] text-[#000000]'>
                Discover unparalleled luxury in this stunning Mansion located in the heart of Asokoro Abuja. This exquisite home offers 6 spacious bedrooms, 7 modern bathrooms, and a sprawling 7,500 sqft of living space. Designed with elegance and comfort in mind, this property features high-end finishes, a gourmet kitchen, a private cinema, and a lush garden with a sparkling pool. The open floor plan seamlessly connects the living areas, creating an inviting atmosphere perfect for both relaxation and entertaining.  
                </p>
            </div>
            <div className='w-full text-center md:text-start '>
                <h1 className='font-bold text-3xl py-3 text-center lg:text-start'>Property Features</h1>
                <div className='flex space-x-3'>
                    <img src={location}alt='location' className='h-[24px] w-[16px]'/>
                    <p className='lg:w-[597px] lg:h-[110px] text-[#000000]'><span className='font-semibold text-xl'>Location and Neighborhood</span>: Situated in a prestigious part of the city, this property offers the best of luxury living with proximity to world-class shopping, dining, and entertainment. Enjoy the privacy of a serene neighborhood while being just minutes away from the vibrant city life of Abuja.</p>
                </div>
                <div className='flex py-3 space-x-3'>
                    <img src={vec}alt='vec' className='w-[18px] h-[22px]'/>
                    <p className='lg:w-[607px] lg:h-[66px] text-[#000000]'><span className='font-semibold text-xl'>Interior Features</span>: Gourmet kitchen with top-of-the-line appliances, Open-plan living and dining area, Master suite with walk-in closet and en-suite bathroom, Hardwood floors and high ceilings, Smart home technology.</p>
                </div>
                <div className='flex space-x-3'>
                    <img src={house}alt='houses' className='w-[22px] h-[22px]'/>
                    <p className='lg:w-[607px] lg:h-[66px]  text-[#000000]'><span className='font-semibold text-xl'>Exterior Features</span>: Landscaped garden with private pool and hot tub, Outdoor dining area with built-in BBQ, Three-car garage, Gated entrance with security system.</p>
                </div>
                <div className='flex space-x-3'>
                    <img src={angle}alt='angle' className='w-[22px] h-[22px]'/>
                    <p className='lg:w-[562px] lg:h-[44px] text-[#000000]'><span className='font-semibold text-xl'>Community Ammenities</span>: Access to a private clubhouse and fitness center, nearby parks and recreational areas, 24-hour security patrol.</p>
                </div>
            </div>
           </div>
            
            <div className='py-12 lg:w-[560px] w-full'>
            <div className='rounded-3xl bg-[#CCCCCC80] h-[634px]'>
                <div className='text-center py-10'>
                    <h1 className='md:text-3xl text-xl text-[#000000] font-bold'>Interested in This Property?</h1>
                    <p className='lg:w-[489px] lg:h-[76px] w-full lg:mx-14 text-xl md:p-4 text-center'>Don’t miss the opportunity to make this stunning mansion your new home. Contact us today for more information or to schedule a private viewing.</p>
                </div>
                <div className=''>
                   <div className='text-center'>
                   <img src={sam}alt='sam' className='mx-auto'/>
                   <h1 className='font-bold text-2xl'>Agent Samuel</h1>
                   <h2 className='font-semibold text-xl'>Specialist in luxury properties</h2>
                   <h3 className='font-medium'>+2349022234561</h3>
                   </div>
                </div>
                <div className='text-center'>
                    <button className='bg-[#9DA008]  my-5 rounded-full px-24 p-3'>
                        <h1 className='text-[#FFFFFF] text-center'>Schedule a Viewing</h1>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default PropertyOverview