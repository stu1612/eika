import React, { useContext } from "react";
import styled from "styled-components";
// styles
import {
  FlexStyle,
  GridContainerStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";
// components
import { Button } from "../components/Button";
// import { TaskList } from "../components/TaskList";
import { TaskItem } from "../components/TaskItem";
import { Modal } from "../components/Modal";
// contexts
import { TaskContext } from "../context/TaskContext";

export const Tasks = () => {
  const { isModal, setIsModal, tasksArr } = useContext(TaskContext);
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
        {/* Task list renderd all task items */}
        {/* <TaskList /> */}
        <ContainerStyle>
          {tasksArr.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </ContainerStyle>
        {/* Task list renderd all task items */}
        <FlexStyle display="flex" justifyContent="center">
          <Button title="add item" onClick={() => setIsModal(!isModal)} />
        </FlexStyle>
        <TextWrapperStyle wrapperWidth="80%" wrapperMaxWidth="600px">
          <span className="light">View completed items</span>
        </TextWrapperStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 550px;
`;
