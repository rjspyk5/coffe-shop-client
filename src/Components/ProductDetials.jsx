import { useLoaderData } from "react-router-dom";

export const ProductDetials = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Name:{data.coffeName}</h1>
    </div>
  );
};
