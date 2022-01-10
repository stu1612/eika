import React, { useState } from "react";
import { Modal } from "../components/Modal";
import img from "../assets/images/header-img.png";
import { Button } from "../components/Button";

export const Home = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    console.log("hello");
  };
  return (
    <section className="grid-container" id="home">
      <div className="image-wrapper">
        <img src={img} alt="online task list" className="home-image" />
      </div>
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
    </section>
  );
};
