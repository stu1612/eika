import React from "react";
import styled from "styled-components";
// styles
import { FlexStyle } from "../styles/containerStyles";
// images
import eikaImage from "../assets/images/logo.png";

export const TaskItem = ({ task, tasksArr, setTasksArr }) => {
  const { title, price, img, isCompleted, id } = task;

  const completeTask = (id) => {
    setTasksArr(
      tasksArr.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      })
    );
  };
  return (
    <FlexStyle display="flex" justifyContent="row" alignItems="center">
      <div>
        <input type="checkbox" onClick={completeTask(id)} />
      </div>
      <TaskContent className={`${isCompleted ? "completed" : ""}`}>
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

  .completed {
    opacity: 0.5;
  }

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
