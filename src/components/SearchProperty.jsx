import React, { useState } from 'react';
// import rectA from "../../assets/images/Rectangle 1.png"
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import Wrapper from "../components/resusables/ComponentWrapper"

// VerticalDivider component
const VerticalDivider = ({ height = '100px', width = '1px', color = 'white' }) => {
  return (
    <div style={{ height, width, backgroundColor: color, margin: '0 1rem' }} />
  );
};

const SearchProperty = () => {
  // State hooks for dropdowns
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isPropertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [isPriceRangeOpen, setPriceRangeOpen] = useState(false);

  // State hooks for selected options
  const [selectedLocation, setSelectedLocation] = useState('Abuja');
  const [selectedPropertyType, setSelectedPropertyType] = useState('Bungalow');
  const [selectedPriceRange, setSelectedPriceRange] = useState('10M-30M');
  const [bedroomCount, setBedroomCount] = useState(0);

  const toggleDropdown = (setter) => {
    setter(prev => !prev);
  };

  const handleSelect = (setter, value) => {
    setter(value);
    setLocationOpen(false);
    setPropertyTypeOpen(false);
    setPriceRangeOpen(false);
  };
  return (
    <div className=' bg-[#F8F3DD]  '>
     <Wrapper>
      <div className=' flex flex-col'>
    
       {/* Bottom Black Section */}
       <div className='bg-black text-white flex flex-wrap items-center justify-between p-4 rounded-lg lg:rounded-full mt-16 mb-8 relative flex-col lg:flex-row'>
         {/* Location */}
         <div className='flex-1 mx-2 relative ml-10'>
           <h1 className='text-xl font-semibold mb-1 '>
             LOCATION
           </h1>
           <div className='flex items-center'>
             <p className='text-lg'>{selectedLocation}</p>
             <span 
               onClick={() => toggleDropdown(setLocationOpen)}
               className='ml-2 cursor-pointer'
             >
               {isLocationOpen ? <FiChevronUp /> : <FiChevronDown />}
             </span>
           </div>
           {isLocationOpen && (
             <div className='absolute top-full left-0 bg-white text-black rounded-md p-2 z-10'>
               <p 
                 onClick={() => handleSelect(setSelectedLocation, 'Benin City')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Benin City
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedLocation, 'Warri')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Warri
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedLocation, 'Aba')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Aba
               </p>
             </div>
           )}
         </div>
 
         <VerticalDivider height="50px" />
 
         {/* Bedrooms */}
         <div className='flex-1 mx-2 py-3'>
           <h1 className='text-xl font-semibold text-center '>BEDROOMS</h1>
           <div className='flex items-center justify-center'>
             <button 
               onClick={() => setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0)}
               className='text-white p-1 rounded-xl'
             >
               <CiSquareMinus fontSize={24} />
             </button>
             <span className='text-lg mx-2'>{bedroomCount}</span>
             <button 
               onClick={() => setBedroomCount(bedroomCount + 1)}
               className='text-white p-1 rounded-xl'
             >
               <CiSquarePlus fontSize={24} />
               
               
             </button>
           </div>
         </div>
 
         <VerticalDivider height="50px" />
 
         {/* Property Type */}
         <div className='flex-1 mx-2 relative'>
           <h1 className='text-xl font-semibold mb-1'>
             PROPERTY TYPE
           </h1>
           <div className='flex items-center'>
             <p className='text-lg'>{selectedPropertyType}</p>
             <span 
               onClick={() => toggleDropdown(setPropertyTypeOpen)}
               className='ml-2 cursor-pointer'
             >
               {isPropertyTypeOpen ? <FiChevronUp /> : <FiChevronDown />}
             </span>
           </div>
           {isPropertyTypeOpen && (
             <div className='absolute top-full left-0 bg-white text-black rounded-md p-2 z-10'>
               <p 
                 onClick={() => handleSelect(setSelectedPropertyType, 'Bungalow')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Bungalow
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPropertyType, 'Duplex')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Duplex
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPropertyType, 'Penthouse')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Penthouse
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPropertyType, 'Studio')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 Studio
               </p>
             </div>
           )}
         </div>
 
         <VerticalDivider height="50px" />
 
         {/* Price Range */}
         <div className='flex-1 mx-2 relative'>
           <h1 className='text-xl font-semibold mb-1'>
             PRICE RANGE
           </h1>
           <div className='flex items-center'>
             <p className='text-lg'>{selectedPriceRange}</p>
             <span 
               onClick={() => toggleDropdown(setPriceRangeOpen)}
               className='ml-2 cursor-pointer'
             >
               {isPriceRangeOpen ? <FiChevronUp /> : <FiChevronDown />}
             </span>
           </div>
           {isPriceRangeOpen && (
             <div className='absolute top-full left-0 bg-white text-black rounded-md p-2 z-10'>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '10M-30M')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 10M-30M
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '30M-50M')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 30M-50M
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '50M-100M')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 50M-100M
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '100M-300M')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 100M-300M
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '300M-500M')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 300M-500M
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '500M-1B')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 500M-1B
               </p>
               <p 
                 onClick={() => handleSelect(setSelectedPriceRange, '1B and above')}
                 className='cursor-pointer hover:bg-gray-200 p-2'
               >
                 1B and above
               </p>
             </div>
           )}
         </div>
 
         <button className='bg-[#a0a007] text-white font-semibold py-4 px-6 mt-2 rounded-full hover:bg-[#a0a007c4]'>
           Search Properties
         </button>
       </div>
     </div>
    </Wrapper>
    </div>
   );
 };
 
  
export default SearchProperty;