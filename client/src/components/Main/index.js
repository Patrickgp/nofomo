import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation";

import Home from "../../pages/Home";
// import Categories from "../../pages/Categories";
// import Reviews from "../../pages/Reviews";
import Dashboard from "../../pages/Dashboard";
import CreateProduct from "../CreateProduct";

function Main() {
  return (
    <div className="main">
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
