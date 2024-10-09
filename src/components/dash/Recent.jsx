import React from 'react';
import red from "../../assets/icons/Rectangle 5.png"
import green from "../../assets/icons/Rectangle 5 (1).png"

const Recent = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white lg:rounded-2xl shadow-lg w-[100%] h-full  lg:p-10 flex flex-col items-center space-y-4">
        <div className="w-full space-y-4 lg:p-2">
          <h1 className="text-xl lg:text-xl text-center md:text-start font-bold">
            <strong>Recent Activities</strong>
          </h1>

          {/* First Activity */}
          <div className="flex items-start justify-between w-full px-2 ">
            <div className="flex items-start space-x-2 w-1/2 ">
              <img className="w-4 h-4 object-cover" src={red} alt="Icon" />
              <p className="text-sm lg:px-13 ">
                Your property, <span className="text-[#9FA007]">Standard Bungalow</span> is being processed.
              </p>
            </div>
            <p className="text-gray-400 text-sm text-right">12th August, 2024 8:00am</p>
          </div>

          {/* Second Activity */}
          <div className="flex items-start justify-between w-full px-2">
            <div className="flex items-start space-x-2 w-1/2">
              <img className="w-4 h-4 object-cover" src={green} alt="Icon" />
              <p className="text-sm lg:px-13">
                You recently added a property to your Favorites
              </p>
            </div>
            <p className="text-gray-400 text-sm text-right">10th August, 2024 5:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;