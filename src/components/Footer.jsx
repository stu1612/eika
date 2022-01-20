import React, { useContext } from "react";
import styled from "styled-components";
// styles
import { FlexStyle, TextWrapperStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
// contexts
import { TaskContext } from "../context/TaskContext";

export const Footer = ({ statusHandler }) => {
  const { toggleModal } = useContext(TaskContext);
  return (
    <Container>
      <FlexStyle display="flex" justifyContent="center">
        <Button title="add item" onClick={toggleModal} />
      </FlexStyle>
      <TextWrapperStyle
        wrapperWidth="80%"
        wrapperMaxWidth="600px"
        style={{ margin: "1rem 0" }}
      >
        <select onChange={statusHandler} className="light">
          <option value="current">Current Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>
      </TextWrapperStyle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 0.5px solid var(--lightGrey);
`;
