import React, { useState } from "react";
import { Input } from "./Input";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  return (
    <>
      <Input
        placeholder={"add title"}
        value={inputTitle}
        type={"text"}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <Input
        placeholder={"add price"}
        value={inputPrice}
        type={"number"}
        onChange={(e) => setInputPrice(e.target.value)}
      />
    </>
  );
};
