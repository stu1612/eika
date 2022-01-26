import React, { useContext } from "react";
// styles
// This external component libray is making your import messy (when it becomes 4 lines down, is a sign that you are importing too much)
// In this case importing styles from a third part is the problem. During the course we will explain how to do it with pure CSS, this will make you a more desirable frontend dev,
// as many companies undestand that using frameworks like React bootstrap, material design, etc are faster to get started but slower on the long run as maintenance becomes hard.
// Some companies outright ban you from using those libraries at all.
import {
  FlexStyle,
  GridContainerStyle,
  ImageWrapperStyle,
  TextWrapperStyle,
} from "../styles/containerStyles";
// components
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
// images
import img from "../assets/images/header-img.png";
import logo from "../assets/images/logo.png";
// context
import { TaskContext } from "../context/TaskContext";

export const Home = () => {
  const { toggleModal, isModal, isLoggedIn } = useContext(TaskContext);

  // we didnt need to set a cookie for that. We could easily just ask if there any task at all.
  const loginHandler = () => {
    localStorage.setItem("token", JSON.stringify(isLoggedIn));
    toggleModal();
  };

  // naming -1
  // use the full name "fistParameter", "secondParamenter" BECUASE this to confusion
  // PERFECT EXAMPLE, i though they where parameters to be sent to some function, it turns out that para means... paragraph
  // In any case if the text is hardcoded, don't break the <p> into data and text, let it be 1 single entity.
  // If the text is super long (way longer than in this case), then having a file called homeData.json or Home.json next to Home.jsx with the data would be a cleaner approach
  const firstPara =
    "Welcome to EIKA's shopping list. Here you will be able to create a todo list with for the furniture you want to buy";
  const secondPara =
    "To get started press the Add new item button and a popup will ask you the name and the price of the item you want to add.  You can also add an image!";

  return (
    // Diagmond fragment -1
    // We use the diamond fragment only when we want to return some pieces of jsx that do not have a container (the parent calling it, is the container)
    // The route "/home" for the component Home is the whole web page, thus a div with the id home would be the perfect fit.
    // The <div id="home"> would contain the <GridContainerStyle> and the <Modal>
    <>
      <GridContainerStyle id="home">
        <ImageWrapperStyle wrapperWidth="100px">
          <img src={logo} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <ImageWrapperStyle wrapperWidth="300px">
          <img src={img} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <TextWrapperStyle>
          <h1>EIKA's Shopping List</h1>
        </TextWrapperStyle>
        <TextWrapperStyle
          textAlign="center"
          wrapperWidth="80%"
          wrapperMaxWidth="600px"
        >
          <p>{firstPara}</p>
          <br />
          <p>{secondPara}</p>
        </TextWrapperStyle>
        <FlexStyle display="flex" justifyContent="center">
          <Button title="add item" onClick={loginHandler} />
        </FlexStyle>
      </GridContainerStyle>
      {isModal ? <Modal /> : null}
    </>
  );
};
