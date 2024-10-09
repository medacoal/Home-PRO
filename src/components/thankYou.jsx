import React from 'react';
import round from "../assets/icons/Vector (9).png"
import check from "../assets/icons/Vector (10).png"

const ThankYou = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-white lg:rounded-3xl shadow-lg w-full lg:max-w-3xl h-full lg:h-auto lg:p-36 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-16 h-16 lg:w-24 lg:h-24 mb-10">
            <img
              src={round}
              alt="Round Icon"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={check}
              alt="Check Icon"
              className="absolute inset-0 w-3/4 h-3/4 object-contain"
              style={{ top: '12.5%', left: '12.5%' }} 
            />
          </div>
          <h1 className="text-center text-xl lg:text-2xl font-bold ">
            Thank you for your message! <br /> we'll get back to you as soon <br /> as possible.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;