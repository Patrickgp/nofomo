import React from "react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
