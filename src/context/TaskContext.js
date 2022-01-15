// fn - logUser
// when user onClicks button on home page - they are now logged into the application
// when the user re-enters the application they will remain on the tasks page
// no functionality is required to sign out unless added as a EXTRA feature
// will use isLoggedIn state value as a marker in navigation
// if isLoggedIn ? <Tasks> : <Home>

// fn - addTask()

// fn - checkTask()

// fn - filterTasks()
// save all data and current completed / unCompleted tasks in LS
// a filtered array needs to be getLS on useEffect and setLS on addTask()

import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const data = localStorage.getItem("token");
    if (data) {
      JSON.parse(data);
    } else {
      return false;
    }
  });

  //   const logUser = () => {
  //     navigate("/tasks");
  //     setIsLoggedIn(true);
  //     localStorage.setItem("token", JSON.stringify(isLoggedIn));
  //   };
  return (
    <TaskContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </TaskContext.Provider>
  );
};
