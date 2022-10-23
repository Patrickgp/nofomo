import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
