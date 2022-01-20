import React from "react";
import styled from "styled-components";
// styles
import { FlexStyle, TextWrapperStyle } from "../styles/containerStyles";
// utils
import { sortTasksByPrice } from "../utils/sortPriceUtils";
import { sortTasksByName } from "../utils/sortNameUtils";

export const Header = ({ filteredTasks, setFilteredTasks }) => {
  return (
    <Container>
      <TextWrapperStyle>
        <h2 style={{ padding: "1rem 0" }}>Shopping List</h2>
      </TextWrapperStyle>
      <FlexStyle display="flex" flexDirection="row" alignItems="center">
        <p className="normal">Sort by:</p>
        <span
          className="light"
          onClick={() => sortTasksByName(filteredTasks, setFilteredTasks)}
        >
          Name
        </span>
        <span
          className="light"
          onClick={() => sortTasksByPrice(filteredTasks, setFilteredTasks)}
        >
          Price
        </span>
      </FlexStyle>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid var(--lightGrey);
`;
