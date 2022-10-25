import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand">
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            NO<span style={{ color: "#558C8F" }}>FOMO</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#558C8F" : "black",
                textDecoration: "none",
              })}
              to="home"
              className="nav"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#558C8F" : "black",
                textDecoration: "none",
              })}
              to="categories"
              className="nav"
            >
              Categories
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#558C8F" : "black",
                textDecoration: "none",
              })}
              to="reviews"
              className="nav cta"
            >
              Reviews
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#558C8F" : "black",
                textDecoration: "none",
              })}
              to="signup"
              className="nav cta"
            >
              Sign up | Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;