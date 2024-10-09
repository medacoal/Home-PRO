import React from 'react'
import { featureDb } from './db'
import PropertyCard from '../components/cards/propertyCard'
import Wrapper from '../components/Wrapper'

const FeaturedProperty = () => {
  return (
    <Wrapper className="">
      <h1 className='text-3xl md:text-5xl font-bold py-10 flex-col lg:flex-row lg:text-start text-center '>Featured Properties</h1>
      <div className='flex justify-between flex-wrap gap-4 hover:items'>
      { featureDb && featureDb.length > 0 && featureDb.map((property)=>{
        return(
          <div className=""key={property._id}>
            <PropertyCard {...property} key={property._id}/>
          </div>
        )

      })

      }
        
    </div>
    </Wrapper>
  )
}

export default FeaturedProperty
