// import React, {useState, useEffect} from 'react'
// import imglogo2 from "../../assets/icons/Component 33.png"
// import Wrapper from '../../components/resusables/ComponentWrapper'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// const Register = () => {
// // state
// const [formData, setFormData] = useState({
//   firstname: "",
//   lastname: '',
//   username: '',
//   email: '',
//   password: '',
// });

// // handleinputchange
// const handleInputChange = (e) => {
//   setFormData({...formData, [e.target.name]: e.target.value });
// };


//   const apiUrl = "https://homepro-backend-zp1d.onrender.com/api/register"
// //function to submit form data
//   const handleSubmit = async (e) => {
// e.preventDefault();
// try {
//   const res = await axios.post(apiUrl, {
//     firstName: formData.firstname,
//     lastName: formData.lastname,
//     userName: formData.username,
//     email: formData.email,
//     password: formData.password,
//   });
//   console.log(res);
//   alert("Registration successful!");
// } catch (err) {
//   console.error(err);
//   // alert("Registration failed!");
// }
//   };

//   return (
//   <Wrapper>
//      <div className="w-full lg:w-[628px] mx-auto ">
//      <div className='items-center justify-center'>
//  <div className='py-3 '>
//         <h1 className='mt-32 text-center text-4xl font-bold'>REGISTER!</h1>
//         <p className='text-center'>Already have an account? <Link to="/login" className="cursor-pointer text-custom-green  hover px-1  ">Log In </Link></p>
//     </div>

//     <form onSubmit={handleSubmit} className=" w-full border box-content rounded-3xl shadow-lg lg:p-5">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 mb-2">First Name*</label>
//             <input
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleInputChange}
//               type="text"
//               required
//               placeholder="medacoal"
//               className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 mb-2">Last Name*</label>
//             <input
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleInputChange}
//               type="text"
//               required
//               placeholder="ajeigbe"
//               className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 mb-2">Username*</label>
//             <input
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               type="text"
//               required
//               placeholder="medacoal"
//               className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-2">Email address*</label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               type="email"
//               required
//               placeholder="medacoal@gmail.com"
//               className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
//             <input
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               type="password"
//               required
//               placeholder="Enter your password"
//               className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
//             />
//           </div>

//           <div className="mb-7 text-center lg:text-start">
//             <p className="text-gray-600">
//               By clicking on the "Sign Up" button, you agree to the{' '}
//               <span className="text-[#9FA007]">Terms</span> and{' '}
//               <span className="text-[#9FA007]">Privacy Policy</span>
//             </p>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]"
//           >
//             Sign Up
//           </button>

//           <div className="my-4 flex items-center justify-between p-3">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-4 text-gray-500">Or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="flex items-center justify-center border-2 p-4 rounded-lg">
//             <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
//             <span>
//               <a href="/#">Sign Up with Google</a>
//             </span>
//           </div>
//         </form>
//    </div>
//      </div>
//   </Wrapper>
//   )
// }

// export default Register

import React, { useState } from 'react';
import imglogo2 from "../../assets/icons/flat-color-icons_google.png";
import Wrapper from '../../components/resusables/ComponentWrapper';
import eyeOpen from "../../assets/icons/Component 47.png";
import eyeClosed from "../../assets/icons/Component 47.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = ({ toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate  = useNavigate();

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "https://homepro-backend-zp1d.onrender.com/api/register"
    try {
      const res = await axios.post(apiUrl, formData);
      console.log(res);
      toast.success("Registration Successful!");
      toggleModal()

    } catch (err) {
      console.error(err);
      console.error(err);
      if(err.response)
        toast.error(err.response.data.message)
    }
  };

  return (
    <Wrapper>
      <ToastContainer/>
      <div className="w-full lg:w-[628px] mx-auto h-[700px] ">
        <div className="py-3">
          <h1 className="mt-30 text-center text-4xl font-bold">REGISTER!</h1>
          <p className="text-center">
            Already have an account?{" "}
            <b className="cursor-pointer text-custom-green px-1" onClick={toggleModal}>
              Log In
            </b>
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" w-full border box-content rounded-3xl shadow-lg lg:p-5">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">First Name*</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder="first name"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label  className="block text-gray-700 mb-2">Last Name*</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder="last name"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username*</label>
            <input
              name="userName"
              type="text"
              value={formData.userName}
              onChange={handleInputChange}
              required
              placeholder="username"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email address*</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              required
              placeholder=""
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 mb-2">Phone number*</label>
            <input
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              type="number"
              required
              placeholder="+23485647882"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-3 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
            <img
                src={showPassword ? eyeOpen : eyeClosed} // Change icon based on state
                alt="Toggle password visibility"
                className="absolute right-3 top-12 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
          </div>

          <div className="mb-7 text-center lg:text-start">
            <p className="text-gray-600">
              By clicking on the "Sign Up" button, you agree to the{' '}
              <span className="text-[#9FA007]">Terms</span> and{' '}
              <span className="text-[#9FA007]">Privacy Policy</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]"
          >
            Sign Up
          </button>

          <div className="my-4 flex items-center justify-between p-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center justify-center border-2 p-4 rounded-lg">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>
              <a href="/#">Sign Up with Google</a>
            </span>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;