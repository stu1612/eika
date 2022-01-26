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
  // naming -1 again use the full name Arr is probably array but a similar problem happened between it is parameter or paragraph
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

      {/* Why do we have another modal, isnt the modal located at Home? */}
      {/* During the course i will showcase a way to have a single Modal manager for the whole project */}
      {isModal ? <Modal /> : null}
    </>
  );
};
