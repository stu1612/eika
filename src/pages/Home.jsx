import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
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
// context
import { TaskContext } from "../context/TaskContext";

export const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(TaskContext);
  const [isModal, setIsModal] = useState(false);

  // const openModal = () => {
  //   setIsModal(true);
  // };

  let navigate = useNavigate();

  const handleEnterApp = () => {
    navigate("/tasks");
    setIsLoggedIn("token");
    localStorage.setItem("token", JSON.stringify(isLoggedIn));
  };

  return (
    <>
      <GridContainerStyle id="home">
        <ImageWrapperStyle wrapperWidth="300px">
          <img src={img} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <TextWrapperStyle>
          <h1>Shopping List</h1>
        </TextWrapperStyle>
        <TextWrapperStyle
          textAlign="justify"
          wrapperWidth="80%"
          wrapperMaxWidth="600px"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corrupti quibusdam aliquam possimus error molestiae
            sunt nisi accusantium dolore vero.
          </p>
        </TextWrapperStyle>
        <FlexStyle display="flex" justifyContent="center">
          <Button title="add item" onClick={handleEnterApp} />
        </FlexStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
