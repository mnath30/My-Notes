import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/themeContext";
import { NoteProvider } from "./Context/noteContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NoteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NoteProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
