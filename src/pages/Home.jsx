import React, { useState } from "react";
import { Modal } from "../components/Modal";
import img from "../assets/images/header-img.png";
import { Button } from "../components/Button";
import {
  GridContainerStyle,
  ImageWrapperStyle,
} from "../styles/containerStyles";

export const Home = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    console.log("hi");
  };
  return (
    <GridContainerStyle id="home">
      <ImageWrapperStyle wrapperWidth="300px">
        <img src={img} alt="online shopping" className="img-100" />
      </ImageWrapperStyle>
      <div className="content-title">
        <h1>Shopping List</h1>
      </div>
      <div className="content-description text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti quibusdam aliquam possimus error molestiae sunt nisi
          accusantium dolore vero.
        </p>
      </div>
      <div className="btn-container">
        <Button title="add item" onClick={openModal} />
      </div>
      {modal ? <Modal /> : null}
    </GridContainerStyle>
  );
};
