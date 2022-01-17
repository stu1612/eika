import React, { useContext } from "react";
import styled from "styled-components";
// styles
import { FlexStyle } from "../styles/containerStyles";
// images
import eikaImage from "../assets/images/logo.png";
// contexts
import { TaskContext } from "../context/TaskContext";

export const TaskItem = ({ task }) => {
  const { setTasksArr, tasksArr } = useContext(TaskContext);
  const { title, price, img, isCompleted, id } = task;

  const completeHandler = () => {
    setTasksArr(
      tasksArr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <FlexStyle display="flex" justifyContent="row" alignItems="center">
      <div>
        <input type="checkbox" onClick={completeHandler} />
      </div>
      <TaskContent opacity={isCompleted ? "0.5" : null}>
        <FlexStyle display="flex">
          <FlexStyle display="flex" alignItems="center">
            <p>
              {title}
              {","}
            </p>
            <p>
              {price}
              {" sek"}
            </p>
          </FlexStyle>
        </FlexStyle>
        <div className="task-content__image">
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
  opacity: ${(props) => props.opacity || null};

  /* .checkbox {
    float: left;
  } */

  p {
    padding: 0 0.5rem;
  }

  .task-content__image {
    height: 50px;
    width: 50px;
    display: flex;
  }
`;
