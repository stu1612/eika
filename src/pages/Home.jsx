import React, { useState } from "react";
import { Modal } from "../components/Modal";
import img from "../assets/images/header-img.png";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="grid-container" id="home">
      <div className="image-wrapper">
        <img src={img} alt="online task list" className="home-image" />
      </div>
      <div className="content-title">
        <h2>Shopping List</h2>
      </div>
      <div className="content-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          corrupti quibusdam aliquam possimus error molestiae sunt nisi
          accusantium dolore vero.
        </p>
      </div>
      <div className="btn-container">
        <button onClick={() => setOpenModal(true)}>Add Task</button>
      </div>
      {openModal ? <Modal /> : null}
    </section>
  );
};
