import bg from "../assets/images/more/4.png";
export const Products = () => {
  return (
    <div
      className="mt-10 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center ">
        <div className="space-y-2 max-w-[367px] ">
          <p className="font-raleway text-center">--- Sip & Savor ---</p>
          <h1 className="text-3xl font-semibold text-center text-[#331A15] font-rancho">
            Our Popular Products
          </h1>
        </div>
      </div>
    </div>
  );
};
