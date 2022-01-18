import React from "react";
import { useNavigate } from "react-router";
// styles
import {
  FlexStyle,
  GridContainerStyle,
  ImageWrapperStyle,
} from "../styles/containerStyles";
// components
import { Button } from "../components/Button";
// images
import img from "../assets/images/404.png";

export const PageNotFound = () => {
  let navigate = useNavigate();

  const navigateToAppHandler = () => {
    navigate("/tasks");
  };
  return (
    <GridContainerStyle id="404">
      <FlexStyle display="flex" flexDirection="column" justifyContent="center">
        <ImageWrapperStyle wrapperWidth="300px">
          <img src={img} alt="online shopping" className="img-100" />
        </ImageWrapperStyle>
        <FlexStyle margin="1rem 0">
          <h2>Sorry, page not found !!</h2>
          <p>Please click below to enter application</p>
        </FlexStyle>
        <Button title="Go to Tasks" onClick={navigateToAppHandler} />
      </FlexStyle>
    </GridContainerStyle>
  );
};
