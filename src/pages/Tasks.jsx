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
// utils
import { switchStatus } from "../utils/switchUtils";
import { sortTasksByPrice } from "../utils/sortPriceUtils";
import { sortTasksByName } from "../utils/sortNameUtils";

export const Tasks = () => {
  const { isModal, setIsModal, tasksArr } = useContext(TaskContext);
  const [status, setStatus] = useState("current");
  const [filteredTasks, setFilteredTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    switchStatus(status, tasksArr, setFilteredTasks);
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
          <span
            className="light"
            onClick={() => sortTasksByName(filteredTasks, setFilteredTasks)}
          >
            Name
          </span>
          <span
            className="light"
            onClick={() => sortTasksByPrice(filteredTasks, setFilteredTasks)}
          >
            Price
          </span>
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
          <select onChange={statusHandler} className="light">
            <option value="current">Current Tasks</option>
            <option value="completed">Completed Tasks</option>
          </select>
        </TextWrapperStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
