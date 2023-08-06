import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
/* import reportWebVitals from './reportWebVitals'; */



/* if (process.env.NODE_ENV === 'production') disableReactDevTools(); */
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* reportWebVitals(); */