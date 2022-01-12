import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --brand-blue: #0058ab;
  --brand-blue-darker: #014788;
  --brand-yellow: #ffcd00;
  --white: #fff;
  --black: #000;
  --lightBlack: rgb(58, 58, 58);
  --grey: rgb(136, 135, 135);
  --lightGrey: rgb(199, 199, 199);
  --lightWhiteGrey: rgb(230, 230, 230);
  --font-title: 25px;
  --font-text: 14px;
  --radius: 4px;
}

html,
body {
  font-family: "Noto Sans", sans-serif;
  min-height: 100vh;
  width: 100%;
}

button,
input {
  outline: none;
  background-color: transparent;
  border: none;
}

h1,
h2 {
  margin: 0;
  font-size: var(--font-title);
  padding: 0.2rem 0;
}

p,
span {
  font-size: var(--font-text);
  line-height: 1.2rem;
  font-weight: 100;
}

a {
  text-decoration: none;
  color: var(--black);
}

input[type="text"],
input[type="number"] {
  border: 0;
  font-family: inherit;
  font-size: var(--font-text);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--lightBlack);
  font-weight: 100;
  text-transform: capitalize;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--lightBlack);
  font-weight: 100;
  text-transform: capitalize;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--lightBlack);
  font-weight: 100;
  text-transform: capitalize;
}

label {
  color: var(--black);
  font-size: 12px;
  text-align: left;
  text-transform: capitalize;
}

.img-100 {
  width: 100%;
  object-fit: contain;
}

.normal,
.light {
  margin: 0 1rem;
  font-size: 12px;
}

.light {
  color: var(--light);
  position: relative;
  cursor: pointer;
}

.light::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  background: var(--light);
  bottom: -2px;
  left: 0;
}

`;
