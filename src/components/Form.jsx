import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { InputButton } from "./InputButton";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("0");
  return (
    <form className="form">
      <div className="column">
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
        <InputButton />
        <div className="btn-container">
          <Button title="add item" onClick={null} />
        </div>
      </div>
    </form>
  );
};
