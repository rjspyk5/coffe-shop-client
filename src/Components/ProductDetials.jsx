import { useLoaderData } from "react-router-dom";

export const ProductDetials = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1>Name:{data.coffeName}</h1>
    </div>
  );
};
