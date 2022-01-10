import React from "react";
import { Link } from "react-router-dom";

export const Tasks = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <button>
        <Link to="/">To Home</Link>
      </button>
    </div>
  );
};
