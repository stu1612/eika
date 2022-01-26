import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
// pages
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
import { PageNotFound } from "../pages/PageNotFound";

export const Navigation = () => {
  let navigate = useNavigate();

  // When app is mounted check if user has logged in
  // if logged in > navigate to /tasks page else > navigate to /
  useEffect(() => {
    try {
      const storageToken = localStorage.getItem("token");

      // Nice way to handle the case of if there no items show the welcome, otherwise show the tasks list!
      if (storageToken) {
        JSON.parse(storageToken);
        navigate("/tasks");
      } else {
        navigate("/");
      }
    } catch {
      navigate("/pageNotFound");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
