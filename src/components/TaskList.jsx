import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { TaskItem } from "./TaskItem";

export const TaskList = ({ filteredTasks }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(filteredTasks)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err, " error");
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [error, filteredTasks]);

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
