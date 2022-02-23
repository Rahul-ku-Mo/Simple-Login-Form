
import React from "react";

const Label = (props) => {
  const { id, labelText, required, className } = props;
  return (
    <label
      htmlFor={id}
      className={`font-serif font-bold text-md tracking-wide mx-auto ${className} `}
    >
      {labelText}
      {required && <span className="font-medium">*</span>}
    </label>
  );
};

export default Label;
