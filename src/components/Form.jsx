import React, { useState, useContext } from "react";
// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
import { Input } from "./Input";
import { InputFile } from "./InputFile";
// contexts
import { TaskContext } from "../context/TaskContext";

import img from "../assets/images/logo.png";

export const Form = () => {
  const { tasksArr, setTasksArr, setIsModal, isModal } =
    useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random() * 1000,
      title: title,
      price: price,
      img: file,
      isCompleted: false,
    };
    setTasksArr([...tasksArr].concat(newTask));
    setIsModal(!isModal);
  };

  // fn - fileHandler()
  // display the image from inputfile using js file manager
  const fileImageHandler = (e) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <FlexStyle display="flex" flexDirection="column">
      <Input
        label={"title"}
        placeholder={"title"}
        value={title}
        type={"text"}
        onChange={(e) => setTitle(e.target.value)}
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
        onChange={fileImageHandler}
      />
      <p>{fileName ? fileName : "No image selected"}</p>

      <FlexStyle display="flex" justifyContent="center" margin="1rem">
        <Button title="add item" onClick={submitHandler} />
      </FlexStyle>
    </FlexStyle>
  );
};
