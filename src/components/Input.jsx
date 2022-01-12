import React from "react";
import styled from "styled-components";

export const Input = ({ placeholder, value, type, onChange, label }) => {
  return (
    <>
      <label>{label}</label>
      <InputStyle
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

const InputStyle = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background-color: var(--lightWhiteGrey);
  width: 100%;
  transition: all all 0.3s ease-out;
`;
