import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="home">
      <h2>Home</h2>
      <button onClick={() => setOpenModal(true)}>Add Task</button>
      {openModal ? <Modal /> : null}
    </div>
  );
};
