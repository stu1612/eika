import React from "react";
import styled from "styled-components";

export const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "Add Item"}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: var(--brand-blue);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  text-transform: capitalize;
  text-align: center;
  word-spacing: normal;
  font-weight: 100;
  font-size: var(--font-text);
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;
