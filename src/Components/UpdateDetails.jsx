import { useLoaderData, useNavigate } from "react-router-dom";
export const UpdateDetails = () => {
  const data = useLoaderData();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const coffeName = form.get("CoffeName");

    fetch(`http://localhost:5000/coffe/${data._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coffeName }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const navigate = useNavigate();
  return (
    <div>
      <button className="font-rancho" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#F4F3F0] mt-10 py-16 px-24 max-w-[1000px] rounded-md">
          <h1 className="text-[#374151] text-3xl font-rancho text-center">
            Update Details
          </h1>

          <form onSubmit={handleOnSubmit} action="" className="mt-4">
            <div className="flex gap-5 font-raleway font-semibold">
              <div className="w-[50%] *:rounded-md">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  defaultValue={data.coffeName}
                  name="CoffeName"
                  type="text"
                  placeholder="Enter Coffe Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Supplier</label>
                <br />
                <input
                  defaultValue={data.supplier}
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
                  defaultValue={data.chef}
                  name="Chef"
                  type="text"
                  placeholder="Enter Chef Name"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Taste</label>
                <br />
                <input
                  defaultValue={data.taste}
                  name="Taste"
                  type="text"
                  placeholder="Enter Coffe Taste"
                  className="w-full p-1 mb-3"
                />
                <br />
                <label htmlFor="name">Price</label>
                <br />
                <input
                  defaultValue={data.price}
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
              defaultValue={data.photo}
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
    </div>
  );
};
