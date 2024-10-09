import React from 'react'
import nairaIcon from "../../assets/icons/Vector (4).png"
import { SectionBDb } from '../db/index.jsx'
import Wrapper from '../resusables/ComponentWrapper.jsx'

const SectionB = () => {
  return (
  <Wrapper>
      <div className=''>
        <form className=''>
        <div className="space-y-8 py-12 px-4 bg-slate-200 rounded-2xl ">
                    <div className='rounded-md '>
                        <select id="location" className="mt-1 block w-full  text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm">
                            <option value="city1">Location</option>
                            <option value="city1">Benin</option>
                            <option value="city2">Kano</option>
                            <option value="city3">Lagos</option>
                            <option value="city4">Warri</option>
                        </select>
                    </div>
                    <div> 
                        {/* <label htmlFor="bedroom" className="block text-sm font-medium text-gray-700">Bedroom:</label> */}
                        <select id="bedroom" className="mt-1 block w-full  text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm">
                            <option value="1">Bedroom</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range:</label> */}
                        <select id="price" className="mt-1 block w-full  text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm ">
                            <option value="low">Price Range</option>
                            <option value="low">30M-50M</option>
                            <option value="medium">50M-100M</option>
                            <option value="high">100M-500M</option>
                            <option value="very-high">500M-1B</option>
                            <option value="luxury">1B and Above</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="property-type" className="block text-sm font-medium text-gray-700">Property Type:</label> */}
                        <select id="property-type" className="mt-1 block w-full  text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm ">
                            <option value="house">Property type</option>
                            <option value="house">Bungalow</option>
                            <option value="house">Duplex</option>
                            <option value="apartment">Penthouse</option>
                        </select>
                    </div>
                    <button className="w-full py-4 px-4 bg-[#9FA007] text-white font-medium rounded-full shadow-sm hover:bg-[#8f8f4d]">
                        Search Property
                    </button>
                </div>
        </form>


<div className='py-12'>
    <h1 className='text-3xl font-bold p-5'>Featured Properites</h1>
    <div>
    {SectionBDb && SectionBDb.map((item, index)=>{
        return (
          <div className='flex w-[400px] py-5 hover:items gap-4'>
            <div className='w-[100px]'>
      <img src={item.image} alt='img'className=' h-[]'/>
      </div>
      <div className='text-xl font-semibold '>
      <h1 className=''>{item.title}</h1>
      <div className='flex text-custom-green'> <img src={nairaIcon} alt='nariaIcon' className=''/>{item.price.toLocaleString("en-Us")}</div>
      </div>
          </div>


        )
      })}
    </div>
</div>
    </div>

  </Wrapper>
    
  )
}

export default SectionB