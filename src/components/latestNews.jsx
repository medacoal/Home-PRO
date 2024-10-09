import React from 'react'
import Wrapper from './resusables/ComponentWrapper'
import { LatestNewsDb } from './db'

const LatestNews = () => {
  return (
    <Wrapper>
    <div>
        <h1 className='text-3xl md:text-5xl font-bold py-10 text-center  lg:text-start'>Latest News and Resources</h1>
    </div>
    <div className="flex justify-around lg:justify-between flex-wrap lg:flex-nowrap md:gap-6">
    {LatestNewsDb && LatestNewsDb.map((item, index)=>{
        return (
            <div className='w-[450px] justify-between  bg-slate-50 rounded-xl hover:border' key={index}>
                <div className=''>
                    <img src={item.image} alt="icon1" className=' w-[500px]' />
                </div>
                <div className='py-5'>
                <div className='flex gap-4  font-bold'>
                <img src={item.icon} alt="icon22" className=' h-8 my-2'/>
                <div className='text-xl  py-2  flex  '>{item.title}
                </div>
                <img src={item.icon2} alt="icon22" className=' h-8 my-2'/>
                    <div className='text-1xl  py-2 gap-6 flex '>{item.date} 
                    </div>
                </div>
                    <p className='text-1xl font-bold'> {item.heading}</p>
                    <p className='text-1xl font-semibold '>{item.description}</p>
                    <div className='flex py-3 gap-1 my-3'>
                    <img src={item.icon9} alt='icon9' className='w-12 h-12'/>
                    <p className='text-custom-green text-xl h-6 py-1'> Read more</p>
                    </div>
                </div>
            </div>
        )
    })}
    </div>
</Wrapper>
  )
}

export default LatestNews