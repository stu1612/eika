import React, { useState } from "react";
import { Modal } from "../components/Modal";
import img from "../assets/images/header-img.png";
import { Button } from "../components/Button";
import {
  GridContainerStyle,
  ImageWrapperStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";

export const Home = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
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
        <div className="btn-container">
          <Button title="add item" onClick={openModal} />
        </div>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
