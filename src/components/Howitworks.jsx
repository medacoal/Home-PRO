import React from 'react'
import { howItWorksDb } from './db';
import Wrapper from './Wrapper';

const Howitworks = () => {
  return (
    <Wrapper>
        <div>
            <h1 className='text-4xl font-bold py-8'>How It Works</h1>
        </div>
        <div className="flex justify-between">
        {howItWorksDb && howItWorksDb.map((item, index)=>{
            return (
                <div className='w-[300px] px-2' key={index}>
                    <div className=''>
                        <img src={item.icon} alt="icon1" className='' />
                    </div>
                    <div className='py-4'>
                        <h2 className='text[#1F1F1F] text-2xl font-semibold py-2'>{item.title}</h2>
                        <p className='text[#1F1F1F] font-light text-[18px]'>{item.description}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </Wrapper>
  )
}

export default Howitworks