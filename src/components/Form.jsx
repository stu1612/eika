import React, { useState, useContext } from "react";
// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
import { Input } from "./Input";
import { InputFile } from "./InputFile";
// contexts
import { TaskContext } from "../context/TaskContext";

export const Form = () => {
  const { setIsModal, isModal, addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTask(title, price, file);
    setIsModal(!isModal);
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
      <InputFile
        type={"file"}
        htmlID={"select-image"}
        onChange={fileChangeHandler}
      />
      <p>{fileName ? fileName : "No image selected"}</p>

      <FlexStyle display="flex" justifyContent="center" margin="1rem">
        <Button title="add item" onClick={submitHandler} />
      </FlexStyle>
    </FlexStyle>
  );
};
