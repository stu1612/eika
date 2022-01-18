import React from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";
//hooks
import { useFetch } from "../hooks/useFetch";

export const TaskList = ({ filteredTasks }) => {
  const { loading, error } = useFetch(filteredTasks);

  const filteredTaskArr = filteredTasks.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

  if (loading) return "Loading..";
  if (error) throw error;

  return (
    <ContainerStyle>
      {loading ?? <h1>Loading ....</h1>}
      {filteredTaskArr}
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
