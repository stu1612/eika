import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import img from "../assets/images/task-img.png";
import {
  ImageWrapperStyle,
  ModalContainerStyle,
  FormContainerStyle,
} from "../styles/containerStyles";

export const Modal = () => {
  return (
    <ModalContainerStyle>
      <FormContainerStyle>
        <Flex>
          <ImageWrapperStyle wrapperWidth="400px">
            <img src={img} alt="create task online" className="img-100" />
          </ImageWrapperStyle>
          <Form />
        </Flex>
      </FormContainerStyle>
    </ModalContainerStyle>
  );
};

const Flex = styled.div`
  flex: 1;
`;
