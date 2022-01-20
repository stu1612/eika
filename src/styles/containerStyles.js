import styled from "styled-components";
import { devices } from "../constants/breakpoints";

export const GridContainerStyle = styled.section`
  display: grid;
  width: min(95%, 50rem);
  min-height: 100vh;
  row-gap: 1.5rem;
  justify-items: center;
  align-content: center;
  text-align: center;
`;

export const ImageWrapperStyle = styled.div`
  width: 100%;
  max-width: ${(props) => props.wrapperWidth};
  flex: 1;
`;

export const ModalContainerStyle = styled.div`
  /* position: absolute; */
  position: fixed;
  height: 100%;
  background-color: var(--lightWhiteGrey);
  z-index: 10;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainerStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  background: var(--white);
  padding: 1rem;
  border-radius: var(--radius);
  filter: drop-shadow(2px 3px 8px var(--grey));
  @media ${devices.tablet} {
    padding: 3rem;
    width: 80%;
  }
`;

export const TextWrapperStyle = styled.div`
  text-align: ${(props) => props.textAlign || "center"};
  width: ${(props) => props.wrapperWidth || null};
  max-width: ${(props) => props.wrapperMaxWidth || null};
`;

export const BtnContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.margin || null};
`;

export const FlexStyle = styled.div`
  display: ${(props) => props.display || null};
  flex-direction: ${(props) => props.flexDirection || null};
  align-items: ${(props) => props.alignItems || null};
  justify-content: ${(props) => props.justifyContent || null};
  flex: ${(props) => props.flex || null};
  margin: ${(props) => props.margin || null};
  width: ${(props) => props.width || null};
`;
