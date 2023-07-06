import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[screen] md:h-[70vh] mx-auto relative">
      {/* overlay */}
      <div className="z-20  absolute left-12 top-10  text-bold text-4xl md:text-6xl uppercase shadow-lg text-yellow-700 ">
        <h1>
          Golden <span className="text-yellow-300 ">sparks, </span> <br />
        </h1>
        <h1 className="relative left-[15%]">
          <span className=" text-yellow-300 text-end">illuminate </span>
          life
        </h1>
      </div>
      <img
        className="w-full h-full object-cover bg-black/100"
        src="https://images.unsplash.com/photo-1626784215013-13322cb0e471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
        alt="/"
      />
    </div>
  );
};

export default Hero;
