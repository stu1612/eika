import React, { useState, useContext } from "react";
// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { FileUploader } from "./FileUploader";
// contexts
import { TaskContext } from "../context/TaskContext";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export const Form = () => {
  const { toggleModal, addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touched, setTouched] = useState({});

  // Errors object defining conditions
  const getErrors = (title, price) => {
    const result = {};
    if (title.length < 4 || title.length > 15)
      result.title = "Title must be between 4 and 15 chars";
    if (price <= 0) result.price = "Price must be a positive integer";
    if (price.length > 7) result.price = "Can only add up to 7 digits";
    return result;
  };

  const errors = getErrors(title, price);

  // condition value to check how many errors exist - used to render message to user
  const errorLength = Object.keys(errors).length;

  // checks whether errors object is 0 - ie no errors
  const isValid = Object.keys(errors).length === 0;

  // targets input id and returns errror message if true
  const blurHandler = (e) => {
    setTouched((value) => {
      return { ...value, [e.target.id]: true };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (isValid) {
      try {
        addTask(title, price, file);
        setStatus(STATUS.COMPLETED);
      } catch (e) {
        setSaveError(e);
      } finally {
        toggleModal();
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };

  // fileReader function allows for uploading image file
  // also allows to safely store in LS without getting blob error
  const fileChangeHandler = (e) => {
    const fileTarget = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);
    reader.readAsDataURL(fileTarget);
    setFileName(fileTarget.name);
  };

  if (saveError) throw saveError;

  return (
    <FlexStyle display="flex" flexDirection="column" width="100%">
      {/* error conditional error length message */}
      {!isValid && status === STATUS.SUBMITTED && (
        <div>
          {errorLength === 1 ? (
            <p className="error">You have {errorLength} error</p>
          ) : (
            <p className="error">You have {errorLength} errors</p>
          )}
        </div>
      )}
      <form onSubmit={submitHandler}>
        {/* title and price inputs */}
        <div>
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
          <p className="error">
            {(touched.title || status === STATUS.SUBMITTED) && errors.title}
          </p>
        </div>
        <div>
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
          <p className="error">
            {(touched.price || status === STATUS.SUBMITTED) && errors.price}
          </p>
        </div>
        {/* image file uploader */}
        <FlexStyle display="flex" flexDirection="column" alignItems="center">
          <FileUploader
            type={"file"}
            htmlID={"select-image"}
            onChange={fileChangeHandler}
          />
          <small>{fileName ? fileName : "No image selected"}</small>
        </FlexStyle>
        {/* form submit input */}
        <FlexStyle display="flex" justifyContent="center" margin="1rem">
          <input
            type="submit"
            className="button btn-blue"
            disabled={status === STATUS.SUBMITTING}
          />
        </FlexStyle>
      </form>
    </FlexStyle>
  );
};
