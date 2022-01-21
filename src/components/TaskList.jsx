import React from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";

export const TaskList = ({ filteredTasks }) => {
  const filteredTaskArr = filteredTasks.map((task) => {
    console.log(task);
    return <TaskItem task={task} key={task.id} />;
  });

  return <ContainerStyle>{filteredTaskArr}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
