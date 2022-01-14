import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [name, setName] = useState("React");
  return (
    <TaskContext.Provider value={{ name }}>{children}</TaskContext.Provider>
  );
};
