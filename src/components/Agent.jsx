import React from 'react'
import { agentDb } from './db'
import Wrapper from '../components/Wrapper'
import bg from "../assets/icons/Line 6.png"

const Agent = () => {
  return (
       <div className='bg-[#fefef9]'>
         <Wrapper>
        <div className="md:bg-cover md:bg-no-repeat" style={{ backgroundImage: `url(${bg})`}}>
            <div className='bg-transparent'>
                <h1 className='text-3xl text-center lg:text-start md:text-4xl font-bold py-8'>Meet Our Agents</h1>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl-gap-8 bg-transparent">
            {agentDb && agentDb.map((item, index)=>{
                return (
                    <div className='flex flex-col items-center justify-center lg:text-start w-full bg-transparent' key={index}>
                        <div className='flex items-center justify-center mt-2 md:mt-0 w-24 md:w-full bg-transparent'>
                            <img src={item.image} alt="icon1" className='bg-transparent' />
                        </div>
                        <div className='py-4 text-center bg-transparent'>
                            <h2 className='text-2xl font-bold bg-transparent'>{item.name}</h2>
                            <p className='text-sm font-bold bg-transparent'>{item.description}</p>
                            <p className='text-sm font-bold bg-transparent'>{item.phone}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        </Wrapper>
       </div>
      )
    }

export default Agent