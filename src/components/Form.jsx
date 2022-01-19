import React, { useState, useContext } from "react";

// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
import { Input } from "./Input";
import { InputFile } from "./InputFile";
// contexts
import { TaskContext } from "../context/TaskContext";

// const STATUS = {
//   IDLE: "IDLE",
//   SUBMITTED: "SUBMITTED",
//   SUBMITTING: "SUBMITTING",
//   COMPLETED: "COMPLETED",
// };

export const Form = () => {
  const { setIsModal, isModal, addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  // const [status, setStatus] = useState(STATUS.IDLE);

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(title, price, file);
    setIsModal(!isModal);
    // navigate("/tasks");
  };

  const fileChangeHandler = (e) => {
    const fileTarget = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);
    reader.readAsDataURL(fileTarget);
    setFileName(fileTarget.name);
  };

  return (
    <FlexStyle display="flex" flexDirection="column">
      <form>
        <Input
          label={"title"}
          placeholder={"title"}
          value={title}
          type={"text"}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          label={"price"}
          placeholder={"price"}
          value={price}
          type={"number"}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputFile
            type={"file"}
            htmlID={"select-image"}
            onChange={fileChangeHandler}
          />
          <p>{fileName ? fileName : "No image selected"}</p>
        </div>

        <FlexStyle display="flex" justifyContent="center" margin="1rem">
          <Button type="submit" title="add item" onClick={submitHandler} />
        </FlexStyle>
      </form>
    </FlexStyle>
  );
};
