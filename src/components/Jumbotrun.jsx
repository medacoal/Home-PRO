import React from "react";
import line from "../assets/icons/Line 3.png"


const Jumbotron = (props) => {
  // Destructure the props
  const { title = "Default Title", description = "This is Default Description " } = props;

  return (
    <div className="h-[300px] bg-[#9FA007] md:bg-cover md:bg-no-repeat" style={{ backgroundImage: `url(${line})` }}>
      {/* <Wrapper className=""> */}
        <div className="w-full h-full flex flex-col justify-center items-center bg-transparent">
          <div className="text-center w-full md:max-w-[50%] mx-auto bg-transparent">
            <h1 className="text-3xl md:text-4xl font-bold text-white bg-transparent">
              {title}
            </h1>
            <p className="text-lg text-white font-semibold bg-transparent pt-4 md:mt-0">
              {description}
            </p>
          </div>
        </div>
      {/* </Wrapper> */}
    </div>
  );
};

export default Jumbotron;