import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tasks" element={<Tasks />} />
    </Routes>
  );
};
