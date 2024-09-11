import React from 'react'
import { SectionDb } from '../../components/db/index'
import PropertyCard from '../cards/propertyCard'

const Section = () => {
  return (
    <div className=''>
        <div className=' grid sm:grid-cols-2 gap-8 min-h-[100vh]'>
      { SectionDb && SectionDb.length > 0 && SectionDb.map((property)=>{
        return(
          <div className=""key={property._id}>
            <PropertyCard {...property} key={property._id}/>
          </div>
        )

      })

      }
        
    </div>
    </div>
  )
}

export default Section