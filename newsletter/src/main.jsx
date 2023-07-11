import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HomeProvider } from "./context/homeContext.jsx"
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeProvider>
        <App />
        </HomeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
