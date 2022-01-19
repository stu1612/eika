// fn - logUser
// when user onClicks button on home page - they are now logged into the application
// when the user re-enters the application they will remain on the tasks page
// no functionality is required to sign out unless added as a EXTRA feature
// will use isLoggedIn state value as a marker in navigation
// if isLoggedIn ? <Tasks> : <Home>

// fn - addTask()
// create object containg title, price, image, id, isCompleted
// add task appends object to item array

// fn - checkTask()
// check task when completed - add completed style property when isCompleted and return to completed array

// fn - filterTasks()
// save all data and current completed / unCompleted tasks in LS
// a filtered array needs to be getLS on useEffect and setLS on addTask()

import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import img from "../assets/images/logo.png";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("logged in");
  const [isModal, setIsModal] = useState(false);
  const [tasksArr, setTasksArr] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr]);

  let navigate = useNavigate();

  const addTask = (title, price, file) => {
    const newTask = {
      id: Math.random() * 1000,
      title: title,
      price: price,
      img: file,
      isCompleted: false,
    };
    setTasksArr([...tasksArr].concat(newTask));
    navigate("/tasks");
  };

  const completeTask = (id) => {
    setTasksArr(
      tasksArr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <TaskContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isModal,
        setIsModal,
        tasksArr,
        setTasksArr,
        addTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
