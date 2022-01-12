import React from "react";
import { Form } from "./Form";
import img from "../assets/images/task-img.png";
import {
  ImageWrapperStyle,
  ModalContainerStyle,
  FormContainerStyle,
} from "../styles/containerStyles";

export const Modal = () => {
  return (
    <ModalContainerStyle>
      <FormContainerStyle>
        <div className="flex">
          <ImageWrapperStyle wrapperWidth="400px">
            <img src={img} alt="create task online" className="img-100" />
          </ImageWrapperStyle>
          <Form />
        </div>
      </FormContainerStyle>
    </ModalContainerStyle>
  );
};
