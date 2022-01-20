import React, { useContext } from "react";
// styles
import {
  FlexStyle,
  GridContainerStyle,
  ImageWrapperStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";
// components
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
// images
import img from "../assets/images/header-img.png";
import logo from "../assets/images/logo.png";
// context
import { TaskContext } from "../context/TaskContext";

export const Home = () => {
  const { toggleModal, isModal, isLoggedIn } = useContext(TaskContext);

  const loginHandler = () => {
    localStorage.setItem("token", JSON.stringify(isLoggedIn));
    toggleModal();
  };

  const firstPara =
    "Welcome to EIKA's shopping list. Here you will be able to create a todo list with for the furniture you want to buy";
  const secondPara =
    "To get started press the Add new item button and a popup will ask you the name and the price of the item you want to add.  You can also add an image!";

  return (
    <>
      <GridContainerStyle id="home">
        <ImageWrapperStyle wrapperWidth="100px">
          <img src={logo} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <ImageWrapperStyle wrapperWidth="300px">
          <img src={img} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <TextWrapperStyle>
          <h1>EIKA's Shopping List</h1>
        </TextWrapperStyle>
        <TextWrapperStyle
          textAlign="center"
          wrapperWidth="80%"
          wrapperMaxWidth="600px"
        >
          <p>{firstPara}</p>
          <br />
          <p>{secondPara}</p>
        </TextWrapperStyle>
        <FlexStyle display="flex" justifyContent="center">
          <Button title="add item" onClick={loginHandler} />
        </FlexStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
