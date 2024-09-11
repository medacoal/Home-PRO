import React from 'react'
import ComponentWrapper from "../components/resusables/ComponentWrapper";
import images from "../assets/images/Vector (2).png"
const Ready = () => {
  
  return (
    <div className="w-full bg-[#9DA008] h-[620px] md:h-[349px]">
      <ComponentWrapper className="w-full flex justify-between  bg-primary">
        <div className="w-full flex justify-between bg-primary flex-wrap">
          <div className=" w-full md:w-[50%] bg-primary pt-8 flex justify-between md:pt-10 lg:pt-3 md:pr-16 lgmr-8">
            <span className="hidden md:block"></span>
            <img src={images} alt="" className="bg-inherit" />
          </div>

          <div className="bg-primary w-full md:w-[50%] flex flex-col items-center justify-center ">
            <div className=" bg-primary h-full md:h-[70%]">
              <h1 className="text-3xl font-bold text-[#FFFFFF] py-4 text-center md:text-start md:py-2 bg-primary ">
                Ready to Find Your Dream Home?
              </h1>
              <p className="bg-inherit text-[#FFFFFF] py-4 text-center md:text-start md:py-2 text-[20px] textlg:lg">
                Start your search today and find the property of your dreams
              </p>
              <div className="w-full text-center bg-inherit md:text-start pt-3">
              <button className="text-[#9DA008] bg-[#FFFFFF] px-4 py-3 font-semibold  hover:text-secondary-foreground hover:bg-primary-foreground hover:border-secondary-foreground  rounded-full border text-lg">
                Browse Properties
              </button>
              </div>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Ready