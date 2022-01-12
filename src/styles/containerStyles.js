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

export const RowToColStyle = styled(RowStyle)`
  flex-direction: column;
  @media ${devices.tablet} {
    flex-direction: row;
    width: 100%;
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
