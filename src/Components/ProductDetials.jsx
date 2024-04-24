import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const ProductDetials = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>ProductDetials</div>;
};
