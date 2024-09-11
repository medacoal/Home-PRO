import React from 'react'
import { NavLink } from 'react-router-dom'
import images from '../assets/images/Vector (1).png'
import icons from '../assets/icons/Homepro.png'

const Menu = () => {
  return (
    <nav className='w-full flex  flex-col lg:flex-row py-4 bg-[#F8F3DD] text-black justify-between lg:items-center'>
        <div className='ml-4'> 
<NavLink to="/" className="flex justify-center items-center">
<img src={images} class='w-full' alt="" />
<img src={icons} class='w-full'  alt="" />
</NavLink>
        </div>
          <div className=' flex flex-col lg:flex-row justify-between  items-center min-w-[70%] text-2xl'>
          <ul className='min-w-[60%] flex flex-col lg:flex-row  justify-between items-center'>
          <li className='hover:text-[#9DA008]  hover:border-b-2 border-[#9DA008] py-2 lg:py-0'>
    <NavLink to="/">Home</NavLink>
          </li>
          <li className='hover:text-[#9DA008] hover:border-b-2 border-[#9DA008] py-2'>
    <NavLink to="/about">About Us</NavLink>
          </li>
          <li className='hover:text-[#9DA008] hover:border-b-2 border-[#9DA008] py-2'>
    <NavLink to="/listings">Listings</NavLink>
          </li>
          <li className='hover:text-[#9DA008] hover:border-b-2 border-[#9DA008] py-2 lg:py-0'>
    <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className='hover:text-[#9DA008] hover:border-b-2 border-[#9DA008] py-2 lg:py-0'>
    <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className=' mt-8 lg:mt-0 mr-4'>
{/* <input type='text' placeholder='search...' className='border-2 rounded-md py-2 w-full focus:outline-none'/> */}
<button className='bg-white text-[#9DA008]  hover: px-[13px] py-[15px]   rounded-full border border-[#9DA008] hover: transition mr-2'>
    Get Started
</button>
{/* <button className='bg-blue-500 text-white hover:text-yellow-600 px-8 py-3 rounded-full hover:bg-blue-600 transition'>
    Sign Up
</button> */}
        </div>
          </div>

    </nav>
  )
}

export default Menu