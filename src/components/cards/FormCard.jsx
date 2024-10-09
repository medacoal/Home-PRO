/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Resgister";

const FormCard = ({
  title,
  subtitle,
  isLoginBtn = true,
  toggleForm,
  loading,
}) => {


  return (
    <div className="">
    { isLoginBtn ? <Login/> : <Register/>}
    </div>
  );
};

export default FormCard;