import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import ngh from "../../assets/icons/CurrencyNgn.png"
import bed from "../../assets/icons/Bed.png"
import bath from "../../assets/icons/Bathtub.png"
import square from "../../assets/icons/tdesign_measurement-2.png"

const PropertyDetails = () => {
  return (
    <Wrapper>
        <div className='flex lg:gap-24 w-full flex-col md:flex-row md:gap-9 '> 
            <div className=' text-center lg:text-start'>
                <h1 className='font-bold text-3xl py-3'>Property Details</h1>
                <div className='flex lg:gap-8 text-1xl gap-1'>
                <div className='flex font-medium'>
                    <img src={ngh}alt='niria' />
                    <p>455,000,000</p>
                </div>
                <div className='flex gap-2'>
                    <img src={bed}alt='bed' />
                    <p>6 bed</p>
                </div>
                <div className='flex gap-2'>
                    <img src={bath}alt='bath' />
                    <p>7 bath</p>
                </div>
                <div className='flex gap-2'>
                    <img src={square}alt='square' />
                    <p>7500 sq ft</p>
                </div>
                </div>
            </div>
            <div className='text-center lg:text-start'>
                    <h1 className='font-bold text-3xl py-3'>Property Type</h1>
                    <h2 className='text-[#1F1F1F] lg:w-[161px]'>Single Family Home</h2>
                </div> 
            <div className='text-center lg:text-start'>
                    <h1 className='font-bold text-3xl py-3'>Year Built</h1>
                    <h2 className='text-[#1F1F1F] lg:w-[161px]'>2023</h2>
                </div> 
        </div>
    </Wrapper>
  )
}

export default PropertyDetails