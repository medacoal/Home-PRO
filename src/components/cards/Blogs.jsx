import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import { blogCardDb } from '../db/index'
import { Link } from 'react-router-dom';

const blogs = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
        {blogCardDb && blogCardDb.map((item, index) => (
          <Link to={`/blog/${index}`} key={index}>
            <div className='justify-between bg-slate-50 rounded-xl hover:border'>
              <div>
                <img src={item.image} alt="icon1" className='w-full ' />
              </div>
              <div className='py-5'>
                <div className='flex gap-4 font-bold'>
                  <img src={item.icon} alt="icon22" className='h-8 my-2'/>
                  <div className='text-xl py-2 flex'>{item.title}</div>
                  <img src={item.icon2} alt="icon22" className='h-8 my-2'/>
                  <div className='text-1xl py-2 gap-6 flex'>{item.date}</div>
                </div>
                <p className='text-1xl font-bold'>{item.heading}</p>
                <p className='text-1xl font-semibold '>{item.description.slice(0, 30 )}...</p>
                <div className='flex py-3 gap-1 my-3'>
                  <img src={item.icon9} alt='icon9' className='w-12 h-12'/>
                  <p className='text-custom-green text-xl h-6 py-1'>Read more</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};


export default blogs