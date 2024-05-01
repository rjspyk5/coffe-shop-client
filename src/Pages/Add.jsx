import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const coffeName = form.get("CoffeName");
    const supplier = form.get("Supplier");
    const catagory = form.get("Catagory");
    const chef = form.get("Chef");
    const taste = form.get("Taste");
    const price = form.get("price");
    const photo = form.get("photo");
    axios
      .post("http://localhost:5000/coffes", {
        coffeName,
        supplier,
        catagory,
        chef,
        taste,
        price,
        photo,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <button className="font-rancho" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#F4F3F0] mt-10 py-16 px-24 max-w-[1000px] rounded-md">
          <h1 className="text-[#374151] text-3xl font-rancho text-center">
            Add New Coffee
          </h1>
          <p className="text-center font-raleway">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleOnSubmit} action="" className="mt-4">
            <div className="flex gap-5 font-raleway font-semibold">
              <div className="w-[50%] *:rounded-md">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  name="CoffeName"
                  type="text"
                  placeholder="Enter Coffe Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Supplier</label>
                <br />
                <input
                  name="Supplier"
                  type="text"
                  placeholder="Enter Supplier Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Catagory</label>
                <br />
                <input
                  name="Catagory"
                  placeholder="Enter Catagory Name"
                  type="text"
                  className="w-full p-1 mb-3"
                />
                <br />
              </div>
              <div className="w-[50%] *:rounded-md ">
                <label htmlFor="name">Chef</label>
                <br />
                <input
                  name="Chef"
                  type="text"
                  placeholder="Enter Chef Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Taste</label>
                <br />
                <input
                  name="Taste"
                  type="text"
                  placeholder="Enter Coffe Taste"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Price</label>
                <br />
                <input
                  name="price"
                  type="text"
                  placeholder="Enter Coffe price"
                  className="w-full p-1 mb-3"
                />
                <br />
              </div>
            </div>
            <label htmlFor="name">Photo</label>
            <br />
            <input
              name="Photo"
              placeholder="Photo Url"
              type="text"
              className="w-full p-1 mb-3 rounded-md font-raleway font-semibold"
            />
            <br />
            <input
              type="submit"
              value="Add Coffe"
              className="bg-[#D2B48C] w-full p-1 text-[#331A15] cursor-pointer font-rancho rounded-md border-[#331A15]"
            />
          </form>
        </div>
      </div>
    </>
  );
};
