import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/icons/home.png";
import { Link, NavLink } from "react-router-dom";
import ComponentWrapper from "../resusables/ComponentWrapper";
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const onCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-inter">
      <ComponentWrapper>
        <nav className="flex justify-between items-center h-24 md:h-[7rem] lg:container shadow-lg md:shadow-none">
          <Link to="/" className="flex items-baseline text-primary">
            <img className="w-[48px] cursor-pointer" src={Logo} alt="Logo" />
            <b className="text-bold ml-2 font-pacifico">HomePro</b>
          </Link>
          <div
            onMouseLeave={onCloseMenu}
            className={`duration-500 md:static absolute top-0 left-0 w-full ${
              menuOpen ? "block top-[100%]" : "hidden top-[12%]"
            } md:flex md:items-center md:w-auto min-h-fit flex-col md:flex-row`}
          >
            <ul className="flex md:flex-row flex-col md:items-center lg:gap-[4vw] gap-8 md:gap-5 font-bold text-neutral-grey-300 py-2 pl-4 md:pl-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive ? "text-primary border-b-primary border-b-2" : "text-dark"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive ? "text-primary border-b-primary border-b-2" : "text-dark"
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
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive ? "text-primary border-b-primary border-b-2" : "text-dark"
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
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive ? "text-primary border-b-primary border-b-2" : "text-dark"
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
                    `hover:border-b border-b-primary hover:text-primary py-2 transition-all duration-300 ${
                      isActive ? "text-primary border-b-primary border-b-2" : "text-dark"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <div className="md:hidden flex gap-5 mb-8">
                <button className="md:block text-primary px-4 py-2 rounded-full border border-primary hover:text-secondary hover:bg-primary font-medium text-sm transition-all ease-in-out duration-300">
                  Get Started
                </button>
              </div>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="hidden md:block text-primary px-4 py-2 rounded-full border border-primary hover:text-secondary hover:bg-primary font-medium text-sm transition-all ease-in-out duration-300">
              Get Started
            </button>
            <div
              onClick={onToggleMenu}
              className="text-2xl cursor-pointer text-primary md:hidden"
            >
              {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </nav>
      </ComponentWrapper>
    </header>
  );
};

export default Menu;