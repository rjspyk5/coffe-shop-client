import { Link } from "react-router-dom";
import bg from "../assets/images/more/4.png";
import { BsCupHot } from "react-icons/bs";
import { useEffect, useState } from "react";
import { CoffeCard } from "../Components/CoffeCard";

export const Products = () => {
  const [coffes, setcoffes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffes")
      .then((res) => res.json())
      .then((data) => setcoffes(data));
  }, []);

  return (
    <div
      className="mt-10  bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center ">
        <div className="space-y-2 max-w-[367px] ">
          <p className="font-raleway text-center">--- Sip & Savor ---</p>
          <h1 className="text-3xl font-semibold text-center text-[#331A15] font-rancho">
            Our Popular Products
          </h1>
          <div className="flex justify-center">
            <Link
              to="/add"
              className="bg-[#E3B577] flex items-center gap-1 text-white text-center font-rancho px-2 py-[2px] rounded-md border border-[#331A15]"
            >
              Add Coffe
              <BsCupHot className="text-[#331A15]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-[1000px] mt-9 mx-auto">
        {coffes.map((el) => (
          <CoffeCard key={el._id} coffeDetails={el} />
        ))}
      </div>
    </div>
  );
};
