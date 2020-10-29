import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <Navbar collapseOnSelect>
        <header>
          <NavbarBrand>
            <Link to="/">Scratch</Link>
          </NavbarBrand>
          <Navbar.Toggle />
        </header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;