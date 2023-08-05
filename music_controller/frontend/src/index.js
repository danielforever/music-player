import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
/* import reportWebVitals from './reportWebVitals'; */



/* if (process.env.NODE_ENV === 'production') disableReactDevTools(); */
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );

/* reportWebVitals(); */