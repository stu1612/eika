import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <button>
        <Link to="/tasks">Add Task</Link>
      </button>
    </div>
  );
};
