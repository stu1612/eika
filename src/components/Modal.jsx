import React from "react";
// import { Link } from "react-router-dom";
import { Form } from "./Form";
import img from "../assets/images/task-img.png";
import {
  GridContainerStyle,
  ImageWrapperStyle,
  RowToColStyle,
  TextWrapperStyle,
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
            <TextWrapperStyle>
              <h2>Hello Shopper</h2>
            </TextWrapperStyle>
            <TextWrapperStyle>
              <p>Please add your shopping item</p>
            </TextWrapperStyle>
          </div>

          <Form />
        </div>
      </RowToColStyle>
    </GridContainerStyle>
  );
};
