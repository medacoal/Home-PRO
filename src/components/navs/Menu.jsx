import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/icons/Homepro.png";
// import images from '../../assets//images/Vector (1).png'
import { Link, NavLink } from "react-router-dom";
import Wrapper from "../resusables/ComponentWrapper";
import { useModal } from "../context/ModalContext";
import AuthForm from "../../pages/auth/AuthForm";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenModal = () => {
    openModal(<AuthForm />); 
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-[#F8F3DD]">
      <Wrapper className="bg-hero ">
        <nav className="flex  justify-between items-center md:h-[8rem]">
          <Link to="/" className="flex items-baseline text-primary">
            <img className=" cursor-pointer" src={Logo} alt="logo" />
            <b className="text-bold ml-2 font-pacifico"></b>
          </Link>
          <div
            onMouseLeave={onCloseMenu}
            className={`duration-500 md:static absolute top-0 left-0 w-full ${
              menuOpen ? "block top-[100%]  bg-[#F8F3DD]" : "hidden top-[12%]"
            } md:flex md:items-center md:w-auto min-h-fit flex-col md:flex-row`}
          >
            <ul className="flex md:flex-row flex-col md:items-center gap-8 md:gap-5 lg:gap-8 font-bold text-neutral-grey-300 md:pl-0 px-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-black border-b-primary border-b-2" : "text-black"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-black border-b-primary border-b-2" : "text-black"
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listings"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-black border-b-primary border-b-2" : "text-black"
                    }`
                  }
                >
                  Listings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `hover:border-b border-custom-green hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-black border-b-primary border-b-2" : "text-black"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-custom-green py-2 transition-all duration-300 ${
                      isActive ? "text-black border-custom-green border-b-2" : "text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <div className="md:hidden flex gap-5 mb-8">
                <Link onClick={handleOpenModal} className="md:block  px-6 py-2 rounded-full border border-custom-green hover:text-custom-green font-medium text-sm transition-all ease-in-out duration-300">
                  Get Started
                </Link>
              </div>
            </ul>
          </div>
          <div className="flex items-center">
            <Link onClick={handleOpenModal} className="hidden md:block  px-4 py-2 rounded-full border border-custom-green hover:text-custom-green font-medium text-sm transition-all ease-in-out duration-300">
              Get Started
            </Link>
            <div
              onClick={onToggleMenu}
              className="text-2xl cursor-pointer text-custom-green md:hidden"
            >
              {menuOpen ? <IoMdClose  className="text-3xl"/> : <GiHamburgerMenu className="text-3xl"/>}
            </div>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Menu;