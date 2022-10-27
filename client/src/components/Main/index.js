import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation";

import Home from "../../pages/Home";
import Categories from "../../pages/Categories";
import Reviews from "../../pages/Reviews";
import Search from "../../pages/Search";
import Dashboard from "../../pages/Dashboard";

function Main() {
  return (
    <div className="main">
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default Main;
