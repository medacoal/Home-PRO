import React from 'react'
import Wrapper from '../resusables/ComponentWrapper'
import Section from '../listingcomponents/Section'
import SectionB from '../listingcomponents/SectionB'


const Properites = () => {
  return (
    <Wrapper>
      <div className='grid lg:grid-cols-3 gap-10 py-14'>
        <div className="w-full overflow-x-hidden border border-slate-200 rounded-2xl">
        <SectionB />
        </div>
       <div className="md:col-span-2">
       <Section />
       </div>
      </div>
    </Wrapper>
  )
}

export default Properites