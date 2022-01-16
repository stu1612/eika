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
// context
import { TaskContext } from "../context/TaskContext";

export const Home = () => {
  const { setIsModal, isModal } = useContext(TaskContext);

  // opens modal - when the modal is mounted the app will set LS token to signify logged in
  const enterAppHandler = () => {
    setIsModal(true);
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
          <Button title="add item" onClick={enterAppHandler} />
        </FlexStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
