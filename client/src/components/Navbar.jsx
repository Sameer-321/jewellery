import React from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // const nav = useNavigate();
  const navLinks = [
    {
      id: 1,
      name: "Explore",
      link: "/",
    },
    {
      id: 2,
      name: "Customers",
      link: "/",
    },
    {
      id: 3,
      name: "About Us",
      link: "/",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <div className="max-w-screen bg-gray-200 ">
      {/* upper nav */}
      <div className=" border-orange-200 w-full my-auto">
        <h1 className="text-bold text-3xl sm:text-5xl sm:pl-9 pl-5 py-5">
          Gahana
        </h1>
        <AiOutlineMenu
          className="absolute top-6 right-3 hover:bg-black/10 cursor-pointer"
          size={30}
        />
      </div>
      {/* lower nav */}
      <div className="w-full border-t-2">
        <ul className="flex w-[90%] sm:w-[60%] mx-auto ">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className=" font-semi-bold m-2 w-auto rounded-md shadow-sm bg-gray-300 "
            >
              {/* <RxDotFilled />  */}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
