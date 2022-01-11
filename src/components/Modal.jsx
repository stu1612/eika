import React from "react";
// import { Link } from "react-router-dom";
import { Form } from "./Form";
import img from "../assets/images/task-img.png";

export const Modal = () => {
  return (
    <div className="grid-container">
      <div className="row row-col">
        <div className="image-wrapper-400">
          <img src={img} alt="online task list" className="home-image" />
        </div>
        <div className="flex">
          <div className="content-title text-left">
            <h1>Hello Shopper</h1>
          </div>
          <div className="text-center">
            <p>Please add your shopping item</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};