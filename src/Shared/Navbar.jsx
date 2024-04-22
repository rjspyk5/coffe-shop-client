import React from "react";
import navBg from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";

export const Navbar = () => {
  return (
    <div className="font-rancho  text-white">
      <div
        style={{ backgroundImage: `url(${navBg})` }}
        className="flex items-center justify-center text-4xl "
      >
        <img className="w-16" src={logo} alt="" />
        <h1 className="">CoffeShop</h1>
      </div>
    </div>
  );
};
