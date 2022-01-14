import React from "react";
import styled from "styled-components";

export const InputFile = ({ onChange, htmlID, type }) => {
  return (
    <>
      <input
        type={type}
        accept="image/*"
        id={htmlID}
        style={{ display: "none" }}
        onChange={onChange}
      />
      <LabelStyle
        htmlFor={htmlID}
        className="button"
        bgcolor="#ffcd00"
        color="#000"
        hoverbgcolor="#DEB300"
      >
        <p>
          Upload Image<span>(optional)</span>
        </p>
      </LabelStyle>
    </>
  );
};

const LabelStyle = styled.label`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
  }
`;
