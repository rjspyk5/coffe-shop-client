import React from "react";
import banner from "../assets/images/more/3.png";

export const Banner = () => {
  return (
    <div>
      <div
        className=" min-h-[500px] hero bg-no-repeat"
        style={{ backgroundImage: `url(${banner})`, width: "100%" }}
      >
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-5"></div>
          <div className="max-w-md font-rancho space-y-3 col-span-7 text-white">
            <h1 className="text-3xl ">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-raleway">
              Its coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] px-2 py-1 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
