import React from "react";
import { Link } from "react-router-dom";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from "react-bootstrap/NavItem";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <div className="nav-container">
        <NavbarBrand>
          <Link to="/">Scratch</Link>
        </NavbarBrand>
        <LinkContainer className="move-right" to="/signup">
          <NavItem>Signup</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer>
      </div>
      <Routes />
    </div>
  );
}

export default App;
