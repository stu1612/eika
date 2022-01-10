import React from "react";

export const Input = ({ placeholder, value, type, onChange }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
