import React from 'react'
import { howItWorksDb } from '../components/db';
import Wrapper from './Wrapper';

const Howitworks = () => {
    return (
        <Wrapper>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold py-10 text-center  lg:text-start'>How It Works</h1>
            </div>
            <div className="flex justify-around lg:justify-between flex-wrap lg:flex-nowrap gap-4">
            {howItWorksDb && howItWorksDb.map((item, index)=>{
                return (
                    <div className='w-[300px]' key={index}>
                        <div className=''>
                            <img src={item.icon} alt="icon1" className='' />
                        </div>
                        <div className='py-4'>
                            <h2 className='text-2xl font-semibold py-2'>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </Wrapper>
      )
    }
export default Howitworks