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
