import React, { useState, useContext, useEffect } from "react";
// styles
import {
  FlexStyle,
  GridContainerStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";
// components
import { Button } from "../components/Button";
import { TaskList } from "../components/TaskList";
import { Modal } from "../components/Modal";
// contexts
import { TaskContext } from "../context/TaskContext";

export const Tasks = () => {
  const { isModal, setIsModal, tasksArr } = useContext(TaskContext);
  const [status, setStatus] = useState("current");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTasks(tasksArr.filter((item) => item.isCompleted === true));
        break;
      case "current":
        setFilteredTasks(tasksArr.filter((item) => item.isCompleted === false));
        break;
      default:
        setFilteredTasks(tasksArr.filter((item) => item.isCompleted === false));
        break;
    }
  }, [status, tasksArr]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <GridContainerStyle>
        <TextWrapperStyle>
          <h2>Shopping List</h2>
        </TextWrapperStyle>
        <FlexStyle display="flex" flexDirection="row" alignItems="center">
          <p className="normal">Sort by:</p>
          <span className="light">Name</span>
          <span className="light">Price</span>
        </FlexStyle>
        {/* ---- */}
        <TaskList
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
        {/* ---- */}
        <FlexStyle display="flex" justifyContent="center">
          <Button title="add item" onClick={() => setIsModal(!isModal)} />
        </FlexStyle>
        <TextWrapperStyle wrapperWidth="80%" wrapperMaxWidth="600px">
          <select onChange={statusHandler}>
            <option value="current">Current Tasks</option>
            <option value="completed">Completed Tasks</option>
          </select>
        </TextWrapperStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
