import React from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
  // const nav = useNavigate();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
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
        <h1
          className="font-bold text-yellow-900  rounded-lg text-5xl
                       sm:text-5xl sm:pl-9 pl-5 py-5"
        >
          Gahana
        </h1>
      </div>
      {/* lower nav */}
      <div className="w-full border-t-2 ">
        <ul className="hidden md:flex w-[90%] sm:w-[60%] mx-auto ">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="font-semi-bold m-2 w-auto rounded-md 
                         shadow-sm bg-gray-300 "
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <AiOutlineMenu
        onClick={handleNav}
        size={30}
        className="absolute right-4 top-4 cursor-pointer
                     hover:bg-black/20 rounded-full"
      />

      {/* SideBAr */}
      <div
        className={
          nav
            ? "z-15 ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ImCancelCircle
          onClick={handleNav}
          size={30}
          className="absolute right-[20%] top-[20%] cursor-pointer
                     hover:bg-black/20 rounded-full"
        />
        <ul
          className="flex flex-col fixed w-full h-full items-center
                       justify-center z-10"
        >
          <li className="font-bold text-3xl p-8 ">Home</li>
          <li className="font-bold text-3xl p-8 ">Destinations</li>
          <li className="font-bold text-3xl p-8 ">Reservation</li>
          <li className="font-bold text-3xl p-8 ">Amenities</li>
          <li className="font-bold text-3xl p-8 ">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
