import React from "react";
import Label from "./Label";

const TextInput = ({ type, onValueChange, labelText, value, autocomplete }) => {
  return (
    <>
      <Label labelText={labelText} />
      <input
        autoComplete={autocomplete}
        type={type}
        value={value}
        className="font-serif text-md border-2 mx-auto mb-8 p-2 rounded-md w-72 "
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
