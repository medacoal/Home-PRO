import React from 'react'
import { featureDb } from './db'
import PropertyCard from '../components/cards/propertyCard'
import Wrapper from '../components/Wrapper'

const FeaturedProperty = () => {
  return (
   <div className=''>
     <Wrapper className=" ">
      <h1 className='text-4xl font-bold py-8'>Featured Properties</h1>
      <div className='flex justify-between'>
      { featureDb && featureDb.length > 0 && featureDb.map((property)=>{
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

export default FeaturedProperty
