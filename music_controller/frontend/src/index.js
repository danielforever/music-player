import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import reportWebVitals from './reportWebVitals';



/* if (process.env.NODE_ENV === 'production') disableReactDevTools(); */

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();