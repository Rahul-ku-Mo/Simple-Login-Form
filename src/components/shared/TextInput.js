import React from "react";
import Label from "./Label";

const TextInput = ({ type, id, onValueChange, required = false, labelText, value,autocomplete}) => {
  return (
    <>
    <Label labelText={labelText} id={id} required={required}/>
      <input
        autoComplete={autocomplete}
        type={type}
        id={id}
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
