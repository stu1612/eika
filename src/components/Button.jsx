import React from "react";
import styled from "styled-components";

export const Button = ({ title, onClick }) => {
  return (
    <ButtonStyle
      onClick={onClick}
      bgcolor="#0058ab"
      color="#fff"
      hoverbgcolor="#014788"
      className="button"
    >
      {title || "Add Item"}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
  }
`;
