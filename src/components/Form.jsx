import React, { useState, useContext } from "react";
// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
import { Input } from "./Input";
import { InputFile } from "./InputFile";
// contexts
import { TaskContext } from "../context/TaskContext";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export const Form = () => {
  const { setIsModal, isModal, addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touched, setTouched] = useState({});

  const getErrors = (title, price) => {
    const result = {};
    if (!title) result.title = "Title is required";
    if (title.length < 4 || title.length > 15)
      result.title = "Title must be between 4 and 15 chars";
    if (!price) result.price = "Price is required";
    if (price <= 0) result.price = "Price must be a positive integer";
    return result;
  };

  const errors = getErrors(title, price);

  const isValid = Object.keys(errors).length === 0;

  const blurHandler = (e) => {
    setTouched((value) => {
      return { ...value, [e.target.id]: true };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (isValid) {
      try {
        await addTask(title, price, file);
        setStatus(STATUS.COMPLETED);
      } catch (e) {
        setSaveError(e);
      } finally {
        setIsModal(!isModal);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };

  const fileChangeHandler = (e) => {
    const fileTarget = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);
    reader.readAsDataURL(fileTarget);
    setFileName(fileTarget.name);
  };

  if (saveError) throw saveError;
  return (
    <FlexStyle display="flex" flexDirection="column">
      {!isValid && status === STATUS.SUBMITTED && (
        <div>
          <p>Fix errors</p>
          <ul>
            {Object.keys(errors).map((key) => {
              return <li key={key}>{errors[key]}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            placeholder="title"
            value={title}
            type="text"
            onBlur={blurHandler}
            onChange={(e) => setTitle(e.target.value)}
            className="inputStyle"
          />
          <p>
            {(touched.title || status === STATUS.SUBMITTED) && errors.title}
          </p>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input
            id="price"
            label="price"
            placeholder="price"
            value={price}
            type="number"
            onBlur={blurHandler}
            onChange={(e) => setPrice(e.target.value)}
            className="inputStyle"
          />
          <p>
            {(touched.price || status === STATUS.SUBMITTED) && errors.price}
          </p>
        </div>

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
          {/* <Button type="submit" title="add item" onClick={submitHandler} /> */}
          <input
            type="submit"
            className="button"
            style={{ background: "blue", color: "white" }}
            disabled={status === STATUS.SUBMITTING}
          />
        </FlexStyle>
      </form>
    </FlexStyle>
  );
};
