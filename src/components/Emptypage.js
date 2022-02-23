import React from "react";
import { Link } from "react-router-dom";

const Emptypage = () => {
  return (
    <>
      <div className="flex justify-center text-3xl font-serif ">
        You are Successfully Logged In!
      </div>
      <Link
        className="flex justify-center text-md font-serif font-bold p-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        to="/"
      >
        Back
      </Link>
    </>
  );
};

export default Emptypage;
