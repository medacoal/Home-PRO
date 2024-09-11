import React from 'react'
import ngnIcon from '../../assets/icons/CurrencyNgn.png'
import heart from '../../assets/icons/love.png'
import bedIcon from '../../assets/icons/Bed.png'
import bathIcon from '../../assets/icons/bath.png'
import tdesign from '../../assets/icons/tdesign_measurement-2.png'

const PropertyCard = ({ _id, title, image, price, bed, bath, size }) => {
    return (
        <>
            <div className="bg-white rounded-xl max-w-[400px] h-[396px] hover:shadow-lg shadow-primary hover:border-primary" key={_id}>
                <div className='rounded-lg p-6 max-w-[400px]'>
                    <img src={image} alt='37(1)' className='w-[325px] h-[245px] r-[15px]' />
                    <div className=' flex text-[#1F1F1F]  text-2xl font-Avenir LT Std w-[154px] justify-between my-1 '>
                        <img src={ngnIcon} alt='ngn' className=' w-[29px]' />
                        <span>{price}</span>
                        <img src={heart} alt='vector' className=' flex h-[20px] w-[21px] mx-36 my-1' />
                    </div>
                    <div className='text-[#1F1F1F] weight-[700] h-5 w-[325px] font-Avenir LT Std text-xl font-semibold'>
                        <h3>{title}</h3>
                    </div>
                    <div className='flex text-[#1F1F1F] my-4  '>
                        <div className=' text-[#1F1F1F] my-3 gap-[6px] flex'>
                            <img src={bedIcon} alt='bed' className='w-[24px] h-[24px] mx-1' />
                            <span>{bed} bed</span>
                            </div>
                        <div className='text-[#1F1F1F] flex my-3 px-6'>
                            <img src={bathIcon} alt='bath' className='w-[49px] h-[28px] top-[2.25px] px-2' />
                            <span>{bath} bath</span>
                            </div>
                        <div className=' text-[#1F1F1F] flex  font-Avenir LT Std h-[25px]  my-3'>
                            <img src={tdesign} alt='tdesign' className='w-[20.91px] h-[20.83]  text-[#1F1F1F]' />
                            <span>{size} sq ft</span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyCard