import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// pages
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
// context
import { TaskContext } from "../context/TaskContext";

export const Navigation = () => {
  const { isLoggedIn } = useContext(TaskContext);
  return (
    <Routes>
      {/* if {!isLoggedIn}{" "}
      {
        <>
          <Route path="/" element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
        </>
      }
      else {<Route path="/" element={<Tasks />} />} */}
      <Route path="/" element={<Home />} />
      <Route path="tasks" element={<Tasks />} />
    </Routes>
  );
};
