import React from "react";

export const Input = ({ placeholder, value, type, onChange, label }) => {
  return (
    <>
      <label>{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
