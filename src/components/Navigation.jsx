import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
// import { Modal } from "./Modal";

export const Navigation = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="" element={<Modal />} /> */}
      <Route path="/" element={<Tasks />} />
    </Routes>
  );
};
