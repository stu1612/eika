import React from "react";
import { Button } from "../components/Button";
import { TaskItem } from "../components/TaskItem";

export const Tasks = () => {
  return (
    <section className="grid-container" id="tasks">
      <div className="content-title">
        <h2>Shopping List</h2>
      </div>
      <div className="task-sortment">
        <p className="normal">Sort by:</p>
        <span className="light">Name</span>
        <span className="light">Price</span>
      </div>

      <div className="task-list">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      <div className="btn-container">
        <Button title="add item" onClick={null} />
      </div>
      <div className="content-description text-center">
        <span className="light">View completed items</span>
      </div>
    </section>
  );
};
