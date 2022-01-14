import React, { useState } from "react";
// styles
import { FlexStyle } from "../styles/containerStyles";
// components
import { Button } from "./Button";
import { Input } from "./Input";
import { InputFile } from "./InputFile";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("0");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <FlexStyle display="flex" flexDirection="column">
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
      <InputFile
        type={"file"}
        htmlID={"select-image"}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <FlexStyle display="flex" justifyContent="center" margin="1rem">
        <Button title="add item" onClick={null} />
      </FlexStyle>
    </FlexStyle>
  );
};
