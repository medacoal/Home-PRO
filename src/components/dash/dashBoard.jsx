import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Using react-icons for search icon
import settings from "../../assets/icons/solar_settings-outline.png"
import logoutIcon from "../../assets/icons/solar_logout-2-outline.png"
import message from "../../assets/icons/mynaui_message.png"
import eye from "../../assets/icons/carbon_view.png"
import heart from "../../assets/icons/Heart.png"
import bell from "../../assets/icons/fluent_alert-24-regular.png"
import dash from "../../assets/icons/mage_dashboard-2.png"
import home from "../../assets/icons/Vector (5).png"
import pro from "../../assets/icons/Homepro.png"
import Welcome from './Welcome';
import Recent from './Recent';
import userlog from "../../assets/icons/Ellipse 6.png"
import dropdown from "../../assets/icons/Vector (8).png"
import PropertyPurchased from './propertyPurchased';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { capitalize } from '../resusables/ScrollToTop';



export const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown toggle
  const {auth, logout } = useAuth()
  const [fullname, setFullname] = useState("")
  const navigate = useNavigate()

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = ()=>{
    logout()
    navigate("/")
  }

  useEffect(() => {
    if (auth?.user?.username) {
      setFullname(capitalize(auth.user.username)); 
    }
  }, [auth]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200 mt-32 ">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4 py-6 shadow-lg hidden lg:block">
        {/* Aligning Home and Pro Icons */}
        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
          <img src={home} alt="home-icon" className="h-8" />
          <img src={pro} alt="pro-icon" className="h-8" />
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-6 text-center lg:text-left">
          <span className="flex justify-center lg:justify-start py-3">
            <img src={dash} alt="dashboard-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007] text-[#9FA007]">
              <strong>Dashboard</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={bell} alt="bell-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Property Alert</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={heart} alt="heart-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>My Favorites</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={eye} alt="eye-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Recently Viewed</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={message} alt="message-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Message</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={settings} alt="settings-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Account Settings</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={logoutIcon} alt="logout-icon" />
            <li onClick={handleLogout} className="cursor-pointer lg:ml-3 hover:text-red-600 text-red-500">
              <strong>Logout</strong>
            </li>
          </span>
        </ul>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/4 bg-gray-300 relative h-screen overflow-y-auto ">
        {/* Search bar and Dashboard title */}
        <div className="lg:flex flex-col sm:flex-row hidden md:block justify-between items-center bg-white h-[15%] mb-6 px-4 sm:px-6 lg:px-10">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Dashboard</h1>

          {/* Right section with Search, Icons, and Dropdown */}
          <div className="flex items-center space-x-4 relative">

            {/* Search Input */}
            <div className="flex items-center bg-white border rounded-full  px-4 py-1 sm:px-6 lg:px-24 shadow-none w-full sm:w-auto relative right-28">
              <AiOutlineSearch size={30} className="text-gray-600 mr-2 relative right-20" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none relative right-20"
              />
            </div>
            {/* Icons: Notification and Message */}
            <div className="flex relative">
              <img src={bell} alt="" size={20}/>
            {/* <FaBell className="text-gray-600" size={20} /> */}
            <p className="relative  text-white text-sm right-3 items-center justify-center  bottom-2 bg-green-400 rounded-full h-5 w-4">2</p>
            </div>
            <img src={userlog} alt="userImage" size={10}/>
            {/* <FaEnvelope className="text-gray-600" size={20} /> */}

            {/* Dropdown Arrow */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <img src={dropdown} alt="" size={20}/>
                {/* <IoIosArrowDown className="text-gray-600" size={20} /> */}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Recently Viewed</li>
                  <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Layout for Welcome and Recent components */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:px-6 px-4">
          <div className="flex-1">
            <Welcome name={fullname} />
          </div>
          <div className="flex-1">
            <Recent />
          </div>
        </div>

        {/* PropertyPurchased component below */}
        <div className="lg:mt-10 mt-6 lg:px-6 px-4">
          <PropertyPurchased />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;