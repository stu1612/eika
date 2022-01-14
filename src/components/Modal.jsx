import React from "react";
// styles
import {
  ImageWrapperStyle,
  ModalContainerStyle,
  FormContainerStyle,
  FlexStyle,
} from "../styles/containerStyles";
// components
import { Form } from "./Form";
// images
import img from "../assets/images/task-img.png";

export const Modal = () => {
  return (
    <ModalContainerStyle>
      <FormContainerStyle>
        <FlexStyle flex="1">
          <ImageWrapperStyle wrapperWidth="400px">
            <img src={img} alt="create task online" className="img-100" />
          </ImageWrapperStyle>
          <Form />
        </FlexStyle>
      </FormContainerStyle>
    </ModalContainerStyle>
  );
};
