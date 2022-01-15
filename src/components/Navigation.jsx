import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
// pages
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
// context
// import { TaskContext } from "../context/TaskContext";

export const Navigation = () => {
  // const { setIsLoggedIn } = useContext(TaskContext);

  let navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      JSON.parse(data);
      navigate("/tasks");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tasks" element={<Tasks />} />
    </Routes>
  );
};
