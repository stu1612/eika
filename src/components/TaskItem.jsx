import React from "react";
import img from "../assets/images/logo.png";

export const TaskItem = () => {
  return (
    <div className="row">
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="task-content">
        <div className="task-content__left">
          <div className="task-content__items">
            <p>Item name{","}</p>
            <p>price</p>
          </div>
        </div>
        <div className="task-content__image">
          <img src={img} alt="logo" className="task-image" />
        </div>
      </div>
    </div>
  );
};
