import React from 'react'
import { listingsDb } from './db'
import PropertyCard from '../components/cards/propertyCard'
import Wrapper from '../components/Wrapper'

const Listings = () => {
  return (
    <div className=''>
        <Wrapper className="bg-white">
      <h1 className='text-4xl font-bold py-8'>Our Listings</h1>
      <div className='flex justify-between flex-wrap gap-16'>
      { listingsDb && listingsDb.length > 0 && listingsDb.map((property)=>{
        return(
          <div className="">
            <PropertyCard {...property} />
          </div>
        )

      })
      }        
    </div>
    </Wrapper>

    </div>
  )
}

export default Listings