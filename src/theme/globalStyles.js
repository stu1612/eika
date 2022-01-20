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
  --brand-yellow-darker: #DEB300;
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
  font-size: 12px;
  line-height: 1rem;
  font-weight: 100;

  @media (min-width: 768px) {
    line-height: 1.2rem;
    font-size: var(--font-text);


  }
}

a {
  text-decoration: none;
  color: var(--black);
}

input[type="text"],
input[type="number"],
select {
  border: 0;
  font-family: inherit;
  font-size: var(--font-text);
}

select {
  background:none;
}

input[type="checkbox"] {
  accent-color: var(--brand-blue);
}

input:focus {
  filter:drop-shadow(2px 2px 3px var(--lightGrey));
}

select:focus {
  outline:0;
  border:0
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

.button {
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
}

.btn-blue {
  background-color: var(--brand-blue);
  color: var(--white);
}

.btn-blue:hover {
  background-color: var(--brand-blue-darker);
}

.btn-yellow {
  background-color: var(--brand-yellow);
  color: var(--black);
}

.btn-yellow:hover {
  background-color: var(--brand-yellow-darker);
}

.normal,
.light {
  margin: 0 1rem;
  font-size: 12px;
}

.light {
  color: var(--grey);
  position: relative;
  cursor: pointer;
}

.light::after {
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  background: var(--grey);
  bottom: -2px;
  left: 0;
}

// old styles 

.input-button span {
  margin-left: 1rem;
} 

.inputStyle {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background-color: var(--lightWhiteGrey);
  width: 100%;
  transition: all all 0.3s ease-out;
}

.error {
  font-size:10px;
  color: #FF4136;
}

.capitalize {
  text-transform:capitalize
}


`;
