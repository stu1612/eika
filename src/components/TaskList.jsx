import React, { useContext } from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";
// contexts
import { TaskContext } from "../context/TaskContext";

export const TaskList = ({ filteredTasks }) => {
  // const { tasksArr } = useContext(TaskContext);
  return (
    <ContainerStyle>
      {filteredTasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
