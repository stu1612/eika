import React from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";

export const TaskList = ({ filteredTasks }) => {
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
