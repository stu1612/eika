import React from "react";
import styled from "styled-components";
// styles
import { FlexStyle } from "../styles/containerStyles";
// images
import img from "../assets/images/logo.png";

export const TaskItem = () => {
  return (
    <FlexStyle display="flex" justifyContent="row" alignItems="center">
      <div className="checkbox">
        <input type="checkbox" style={{ backgroundColor: "red" }} />
      </div>
      <TaskContent>
        <FlexStyle display="flex">
          <FlexStyle display="flex" alignItems="center">
            <p>Item name{","}</p>
            <p>price</p>
          </FlexStyle>
        </FlexStyle>
        <div className="task-content__image">
          <img src={img} alt="logo" className="img-100" />
        </div>
      </TaskContent>
    </FlexStyle>
  );
};

const TaskContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .checkbox {
    float: left;
  }

  p {
    padding: 0 0.5rem;
  }

  .task-content__image {
    height: 50px;
    width: 50px;
    display: flex;
  }
`;
