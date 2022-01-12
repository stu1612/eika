import React from "react";
import styled from "styled-components";
import img from "../assets/images/logo.png";
import { RowStyle } from "../styles/containerStyles";

export const TaskItem = () => {
  return (
    <RowStyle>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <TaskContent>
        <div className="task-content__left">
          <div className="task-content__items">
            <p>Item name{","}</p>
            <p>price</p>
          </div>
        </div>
        <div className="task-content__image">
          <img src={img} alt="logo" className="task-image" />
        </div>
      </TaskContent>
    </RowStyle>
  );
};

const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .task-content__left {
    display: flex;
  }

  .task-content__items {
    display: flex;
    align-items: center;
  }

  .task-content__items p {
    padding: 0 0.5rem;
  }

  .task-content__image {
    height: 50px;
    width: 50px;
  }

  .task-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
