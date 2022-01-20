import React, { useState, useContext, useEffect } from "react";
// styles
import { GridContainerStyle } from "../styles/containerStyles";
// components
import { TaskList } from "../components/TaskList";
import { Modal } from "../components/Modal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// contexts
import { TaskContext } from "../context/TaskContext";
// utils
import { switchStatus } from "../utils/switchUtils";
export const Tasks = () => {
  const { isModal, tasksArr } = useContext(TaskContext);
  const [status, setStatus] = useState("current");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    switchStatus(status, tasksArr, setFilteredTasks);
  }, [status, tasksArr]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <GridContainerStyle>
        <Header
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
        <TaskList
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
        <Footer statusHandler={statusHandler} />
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
