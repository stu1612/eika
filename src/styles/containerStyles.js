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

export const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModalContainerStyle = styled.div`
  position: absolute;
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
  @media ${devices.tablet} {
    padding: 3rem;
    width: 80%;
  }
`;

export const TextWrapperStyle = styled.div`
  text-align: ${(props) => props.textAlign || "center"};
  width: ${(props) => props.wrapperWidth || null};
  max-width: ${(props) => props.wrapperMaxWidth || null};
  /* width: 80%;
  max-width: 600px; */
`;

// export const ContentDescriptionStyle = styled.div`
//   width: 80%;
//   max-width: 600px;
//   text-align: ${(props) => props.textAlign || "center"};
// `;
