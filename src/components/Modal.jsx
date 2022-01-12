import React from "react";
// import { Link } from "react-router-dom";
import { Form } from "./Form";
import img from "../assets/images/task-img.png";
import {
  GridContainerStyle,
  ImageWrapperStyle,
  RowToColStyle,
} from "../styles/containerStyles";

export const Modal = () => {
  return (
    <GridContainerStyle>
      <RowToColStyle>
        <ImageWrapperStyle wrapperWidth="400px">
          <img src={img} alt="create task online" className="img-100" />
        </ImageWrapperStyle>
        <div className="flex">
          <div className="padding-2">
            <div className="content-title text-center">
              <h2>Hello Shopper</h2>
            </div>
            <div className="text-center">
              <p>Please add your shopping item</p>
            </div>
          </div>

          <Form />
        </div>
      </RowToColStyle>
    </GridContainerStyle>
  );
};
