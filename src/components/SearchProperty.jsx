import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchProperty = () => {
  return (
    <div
      className="w-full md:h-[118px] bg-[#1F1F1F] rounded-full flex justify-between items-center p-6
    md:p-8 md:px-12"
    >
      <div className="w-[30%] lg:w-[13%] bg text-white hidden md:block ">
        <label className="block text-base font-semibold bg-inherit pb-2">
          LOCATION
        </label>
        <select
          id="options"
          name="options"
          className=" filter block  w-full border-1 border- bg-inherit py-2 text-secondary sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-[#9ca130]" value="option1">
            Abuja
          </option>
          <option className="bg-inherit" value="option2">
            Lagos
          </option>
          <option className="bg-inherit" value="option3">
            Kano
          </option>
        </select>
      </div>
      <div className="w-[1px] text-white h-full hidden lg:block border-l border-white"></div>
      <div className="w-[13%] bg-dark text-white hidden lg:block">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          BEDROOMS
        </label>
        <div className=" filter w-full border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg">
          4
        </div>
      </div>
      <div className="w-[1px] h-full hidden lg:block border-l border-white"></div>
      <div className="w-[13%] bg-dark text-[white] hidden lg:block ">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          PROPERTY TYPE
        </label>
        <select
          id="options"
          name="options"
          className=" filter block  w-full border-1 border-secondary bg-inherit py-2 text-secondary sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-primary" value="option1">
            Bungalow
          </option>
          <option className="bg-inherit" value="option2">
            Duplex
          </option>
          <option className="bg-inherit" value="option3">
            Penthouse
          </option>
          <option className="bg-inherit" value="option3">
            Studio
          </option>
        </select>
      </div>
      <div className="w-[1px] text-white hidden md:block h-full border-l border-white"></div>
      <div className="w-[30%] lg:w-[13%] bg-dark text-white  hidden md:block">
        <label
          for="options"
          className="block font-semibold text-sm bg-inherit pb-2"
        >
          PRICE RANGE
        </label>
        <select
          id="options"
          name="options"
          className=" filter block  w-full border-1 border-secondary bg-[#1F1F1F] py-2 text-white sm:text-sm rounded-lg"
        >
          <option className="bg-inherit hover:bg-primary" value="option1">
            10M - 30M
          </option>
          <option className="bg-inherit" value="option2">
            30M - 50M
          </option>
          <option className="bg-inherit" value="option3">
            50M - 100M
          </option>
          <option className="bg-inherit" value="option3">
            100M - 300M
          </option>
          <option className="bg-inherit" value="option3">
            300M - 500M
          </option>
          <option className="bg-inherit" value="option3">
            500M - 1B
          </option>
          <option className="bg-inherit" value="option3">
            1B and above
          </option>
        </select>
      </div>
      <div className="w-[1px] hidden md:block h-full text-white border-l border-white"></div>
      <div className="w-[30%] lg:w-[13%] bg-dark text-secondary  hidden md:block">
        <div className="bg-dark">
          <button className="w-full flex items-center justify-center text-secondary bg-[#9DA008] text-md p-3 hover:border hover:border-primary  hover:bg-secondary hover:text-primary  rounded-full">
            <CiSearch className="bg-inherit hover:bg-inherit hover:text-inherit" />{" "}
            &nbsp; Search
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full bg-dark md:hidden flex justify-between items-center">
        <input
          type="text"
          className="w-[80%] bg-dark py-2 text-secondary border-1 focus:outline-none focus:border border-secondary text-sm rounded rounded-r-none px-4"
          placeholder="Search by keyword..."
        />
        <button className="w-[20%] flex items-center justify-center p-2 rounded rounded-l-none text-primary bg-secondary hover:bg-primary hover:text-secondary">
          <CiSearch className="text-primary text-2xl bg-inherit text-inherit" />
        </button>
      </div>
    </div>
  );
};

export default SearchProperty;