
import React from 'react';
import pana from "../../assets/images/pana.png"

const Welcome = ({name}) => {
    return (
        <div className="bg-white lg:rounded-3xl shadow-lg w-full h-full p-1 flex relative overflow-hidden lg:overflow-auto scrollbar-none items-center my-10 lg:my-0 ">
            <div className="flex flex-col space-y-2 lg:p-1 relative text-center">
                <h1 className="relative text-xl lg:text-2xl font-bold ">
                    Welcome {name}
                </h1>
                <p className='lg:p-5 text-xl lg:text-start w-[350px] '>
                    Manage your property searches, saved listings, and more from your personalized dashboard. Whether you're actively looking for or just browsing, we've got everything you need to stay organized and make informed decisions.
                </p>
            </div>
            <div className='w-[30%] '>
                <div>
                  <img src={pana} alt="" className='hidden md:block'/>
                </div>
            </div>
        </div>
    );
};

export default Welcome;