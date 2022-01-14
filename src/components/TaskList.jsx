import React from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  return (
    <ContainerStyle>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
