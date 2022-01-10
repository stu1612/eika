import React from "react";
import { Link } from "react-router-dom";

export const Modal = () => {
  return (
    <div className="modal">
      <h2>Modal</h2>
      <button>
        <Link to="/tasks">Tasks</Link>
      </button>
    </div>
  );
};
