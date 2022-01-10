import React from "react";

export const Button = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title || "Add Item"}
    </button>
  );
};
