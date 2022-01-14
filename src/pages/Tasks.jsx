import React from "react";
// styles
import {
  FlexStyle,
  GridContainerStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";
// components
import { Button } from "../components/Button";
import { TaskList } from "../components/TaskList";

export const Tasks = () => {
  return (
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
      <TaskList />
      {/* Task list renderd all task items */}
      <FlexStyle display="flex" justifyContent="center">
        <Button title="add item" onClick={null} />
      </FlexStyle>
      <TextWrapperStyle wrapperWidth="80%" wrapperMaxWidth="600px">
        <span className="light">View completed items</span>
      </TextWrapperStyle>
    </GridContainerStyle>
  );
};
