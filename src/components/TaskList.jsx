import React, { useContext } from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";
// contexts
import { TaskContext } from "../context/TaskContext";

export const TaskList = () => {
  const { tasksArr } = useContext(TaskContext);
  return (
    <ContainerStyle>
      {tasksArr.map((task) => (
        <TaskItem task={task} />
      ))}
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
