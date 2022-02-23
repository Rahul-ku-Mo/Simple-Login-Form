import React from "react";

const Button = ({ btnName, handleFunc, type }) => {
  return (
    <div
      onClick={handleFunc}
      type={type}
      className="font-serif text-white px-4 py-2 font-semibold bg-zinc-800 mx-auto rounded-xl shadow-sm shadow-slate-300 cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
    >
      {btnName}
    </div>
  );
};

export default Button;
