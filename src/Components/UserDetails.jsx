import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      <h1>{user?.email}</h1>
    </div>
  );
};
