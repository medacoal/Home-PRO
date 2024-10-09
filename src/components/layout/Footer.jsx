import React from "react";
import Wrapper from "../resusables/ComponentWrapper";
import homepro from "../../assets/icons/Vector (5).png";
import { Link } from "react-router-dom";
// import homepro from '../../assets/icons/Homepro.png';
import Htext from '../../assets/icons/Homepro.png';
import ig from '../../assets/icons/icons8-instagram-48 (2).png';
import tw from '../../assets/icons/icons8-twitterx-50.png';
import fb from '../../assets/icons/icons8-facebook-48.png';



const Footer = () => {
  return (
    <div className="w-full h-auto md:h-[351px] bg-black">
    <Wrapper className="bg-dark h-[159px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 ">
        <div className="h-full bg-inherit">
          <div className="bg-inherit flex flex-col">
            <Link to="/" className="bg-inherit">
              <div className="bg-inherit flex items-baseline">
                <img src={homepro} alt="logo" className="bg-inherit" />
                <img src={Htext} alt="HomePro Text" />
              </div>
            </Link>
            <p className="text-sm bg-inherit text-slate-300 pt-4">
              Best place to find Properties <br />
              that suit your person
            </p>
            <div className="pt-5 flex items-center">
              <img src={fb} alt="Facebook" className="w-9 h-9 mx-2 rounded-full bg-white p-1"/>
              <img src={ig} alt="Instagram" className="w-9 h-9 mx-2 rounded-full bg-white p-1"/>
              <img src={tw} alt="Twitter" className="w-9 h-9 mx-2 rounded-full bg-white p-1"/>
            </div>
          </div>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-inherit gap-4">
          <div className="h-full mt-10 mr-8 w-[90%]">
            <p className="text-white mb-3">About Us</p>
            <p className="text-white">Contact Information</p>
          </div>
          <div className="h-full bg-inherit w-[90%]">
            <div className="mt-10">
              <p className="text-white mb-3">Privacy Policy</p>
              <p className="text-white">Terms of Service</p>
            </div>
          </div>
        </div>
        <div className="h-full bg-inherit w-full flex flex-col justify-center items-center p-4 space-y-4">
          <p className="text-white text-center mb-6"> <strong>    Subscribe to Our Newsletter for 
            <br /> <p className="mr-32">latest updates</p> </strong> </p>
           
          <form action="/submit-email" method="post" className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 px-3 py-3 border border-gray-300 rounded-l-xl shadow-sm ml-12 sm:text-sm"
            />
            <button
              type="submit"
              className="bg-[#9FA007] text-white py-2 px-4 border border-transparent rounded-r-xl shadow-sm text-sm font-medium hover:bg-[#8a8b05] focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
    <div className="w-full bg-inherit border-t border-t-slate-400 text-sm pt-6 mt-8">
      <div className="bg-inherit flex flex-col justify-center items-center">
        <p className="text-center text-sm bg-inherit text-slate-300">
          Copyright&copy;2024&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
        </p>
        <small className="text-center text-xs bg-inherit text-slate-400 mt-3">
          Designed by Maryam 
          | Coded by Medacoal
        </small>
      </div>
    </div>
  </div>
);
};

export default Footer;