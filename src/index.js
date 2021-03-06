import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import { App } from "./App";
import { ErrorBoundary } from "./ErrorBoundary";
import { GlobalStyle } from "./theme/globalStyles";

import reportWebVitals from "./reportWebVitals";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <TaskContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </TaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
