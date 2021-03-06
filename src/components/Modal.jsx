import React, { useContext } from "react";
import { useNavigate } from "react-router";
// npm
import { AiFillCloseCircle } from "react-icons/ai";
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
// contexts
import { TaskContext } from "../context/TaskContext";

export const Modal = () => {
  const { toggleModal } = useContext(TaskContext);

  let navigate = useNavigate();

  // user can exit modal whilst still remaining logged in on '/tasks' page
  const exitModalHandler = () => {
    toggleModal();
    navigate("/tasks");
  };

  return (
    <ModalContainerStyle>
      <FormContainerStyle>
        <AiFillCloseCircle
          onClick={exitModalHandler}
          color="#0058ab"
          size={28}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            cursor: "pointer",
          }}
        />
        <FlexStyle
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <ImageWrapperStyle wrapperWidth="400px">
            <img src={img} alt="create task online" className="img-100" />
          </ImageWrapperStyle>
          <Form />
        </FlexStyle>
      </FormContainerStyle>
    </ModalContainerStyle>
  );
};
