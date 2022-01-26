import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

// Technically this is a React component so it should be a .jsx as well.
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

  // ue sets the inital tasksArr items with token 'tasks' when the app is mounted
  // tasksArr will always load 'token' values if it exists or will start with empty []
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr]);

  let navigate = useNavigate();

  // no uused code in production -1
  // const uuidv4 = require("uuid/v4");

  // no comments -1
  // naming -1 for the fn (function)
  // addTask adds a new object to the tasksArr
  // when a fn has been executed the app will navigate back to '/tasks'
  const addTask = (title, price, file) => {
    const newTask = {
      id: uuidv4(), // the uuidv4 is an overkill in this project, as every task is created in sequence and there was no delete task on purpose, you could have goten away with just... tasksArr.length !!!
      title: title,
      price: price,
      img: file,
      isCompleted: false,
    };
    setTasksArr([...tasksArr].concat(newTask));
    navigate("/tasks");
  };

  // no comments -1
  // no need for comments is easy to understand what it is and why the id is required as an argunment
  // complete task fn checks the id of the itemTask selected
  // if true - isCompleted value of the task object is set to true
  // if isCompleted === true - it is styled with opacity 0.5
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

  // toggleModal will set the modal state to the opposite of its current state
  // easy to navigate to and from modal
  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <TaskContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        tasksArr,
        setTasksArr,
        addTask,
        completeTask,
        toggleModal,
        isModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
