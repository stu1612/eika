import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";
// services
import { fetchItems } from "../services/taskServices";

export const TaskList = ({ filteredTasks }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await fetchItems(filteredTasks);
        console.log(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [filteredTasks]);

  if (loading) return "Loading..";
  if (error) throw error;

  const filteredTaskArr = filteredTasks.map((task) => {
    return <TaskItem task={task} key={task.id} />;
  });

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
