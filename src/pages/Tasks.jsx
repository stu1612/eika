import React from "react";
import { Button } from "../components/Button";
import { TaskItem } from "../components/TaskItem";
import {
  GridContainerStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";

export const Tasks = () => {
  return (
    <GridContainerStyle>
      <TextWrapperStyle>
        <h2>Shopping List</h2>
      </TextWrapperStyle>
      <div className="task-sortment">
        <p className="normal">Sort by:</p>
        <span className="light">Name</span>
        <span className="light">Price</span>
      </div>

      <div className="task-list">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      <div className="btn-container">
        <Button title="add item" onClick={null} />
      </div>
      <TextWrapperStyle wrapperWidth="80%" wrapperMaxWidth="600px">
        <span className="light">View completed items</span>
      </TextWrapperStyle>
    </GridContainerStyle>
  );
};
