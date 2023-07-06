import React, { useState } from "react";

const Hero = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[screen] h-[70vh] mx-auto relative">
      {/* overlay */}
      <div
        className="z-5  absolute left-12 top-10  text-bold
                    text-4xl md:text-6xl uppercase shadow-lg
                     text-yellow-700 "
      >
        <h1>
          Golden <span className="text-yellow-300 ">sparks, </span>
          <br />
        </h1>
        <h1 className="relative left-[15%]">
          <span className=" text-yellow-300 text-end">illuminate </span>
          life
        </h1>
      </div>
      <div className="absolute top-0 left-0 h-full w-full  bg-black/30 " />
      <img
        className="w-full h-full object-cover  "
        src="https://images.unsplash.com/photo-1626784215013-13322cb0e471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
        alt="/"
      />
    </div>
  );
};

export default Hero;
