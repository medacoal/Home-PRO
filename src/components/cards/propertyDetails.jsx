import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SectionDb } from '../db';

const PropertyDetail = () => {
  const { id } = useParams();
  
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Find the property by ID and set it to the state
    const p = SectionDb.find((item) => item._id === id);

    if (p) {
      setProperty(p);
    } else { 
      setProperty(null);
    }
  }, [id]);

  if (!property) {
    return <p className="text-center mt-36 text-2xl">Property not found.</p>;
  }
  return (
    <div className="mt-36 w-3/4 mx-auto bg-gray-100 rounded-lg shadow-md p-6 flex flex-col md:flex-row">
      {/* Image section */}              
      <img 
        src={property.image} 
        alt="Property" 
        className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" 
      />

      {/* Text section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <p className="text-lg mb-2">{property.location}</p>
        <p className="text-lg mb-4">{property.description}</p>
        <p className="text-lg mb-4">{property.overview}</p> 
        <p className="text-lg mb-4">{property.features}</p>
        {/* Add additional property details here */}
      </div>
    </div>
  );
};

export default PropertyDetail;