import React, { useState } from "react";
import styled from "styled-components";
import { BtnContainerStyle } from "../styles/containerStyles";
import { Button } from "./Button";
import { Input } from "./Input";
import { InputButton } from "./InputButton";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("0");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <FormStyle>
      <Input
        label={"title"}
        placeholder={"title"}
        value={inputTitle}
        type={"text"}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <Input
        label={"price"}
        placeholder={"price"}
        value={inputPrice}
        type={"number"}
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <InputButton
        type={"file"}
        htmlID={"select-image"}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <BtnContainerStyle margin="1rem">
        <Button title="add item" onClick={null} />
      </BtnContainerStyle>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;
