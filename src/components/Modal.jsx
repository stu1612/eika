import React, { useEffect, useContext } from "react";
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
  const { isLoggedIn, setIsLoggedIn, setIsModal, isModal } =
    useContext(TaskContext);

  // UE sets local storage token to signify user has logged in
  // useEffect(() => {
  //   setIsLoggedIn("token");
  //   localStorage.setItem("token", JSON.stringify(isLoggedIn));
  // }, [isLoggedIn, setIsLoggedIn]);

  let navigate = useNavigate();

  // user can exit modal whilst still remaining logged in on '/tasks' page
  const exitModalHandler = () => {
    setIsModal(!isModal);
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
