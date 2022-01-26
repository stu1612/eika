import React, { useContext } from "react";
import styled from "styled-components";
// styles
import { FlexStyle } from "../styles/containerStyles";
// images
import eikaImage from "../assets/images/logo.png";
// contexts
import { TaskContext } from "../context/TaskContext";

export const TaskItem = ({ task }) => {
  const { completeTask } = useContext(TaskContext);
  const { title, price, img, isCompleted, id } = task;

  const completeTaskHandler = () => {
    completeTask(id);
  };

  return (
    // At the risk of sounding annoying, this is the problem of using this component libraries, you are mixing CSS in JSX (as if mixing HTML in React to create JSX was not messy enough by Facebook)
    // Below the component you have a const TaskContent with some CSS wrote as a JS string that is passable, but...
    // This component FlexStyle is usint 3 props to setup its style, either use the approach on the bottom or setup properties on the props but not both
    // This would make hard to debug the CSS as there could 2 different places where the problem is located
    <FlexStyle display="flex" justifyContent="row" alignItems="center">
      <div>
        <input type="checkbox" onClick={completeTaskHandler} />
      </div>
      <TaskContent opacity={isCompleted ? "0.5" : null}>
        <FlexStyle display="flex">
          <FlexStyle display="flex" alignItems="center">
            <p className="capitalize">{title.trim() + " ,"}</p>
            <p>{parseFloat(price).toFixed(2) + " kr"}</p>
          </FlexStyle>
        </FlexStyle>
        <div className="task-content__image">
          {/* if image is not uploaded - then add eika logo image */}
          <img src={img ? img : eikaImage} alt="logo" className="img-100" />
        </div>
      </TaskContent>
    </FlexStyle>
  );
};

const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
  opacity: ${(props) => props.opacity || null};

  p {
    padding: 0 0.5rem;
  }

  .task-content__image {
    height: 50px;
    width: 50px;
    display: flex;
  }
`;
