// == Dependencies == //
import React from "react";
import { NavLink } from "react-router-dom";
// == Style == //
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <NavLink className="navlink">
        <h1><span>Macro Calculator</span></h1>
        </NavLink>
      </div>
      <div className="links">
        <NavLink className="navlink">
          <h3><span>Home</span></h3>
        </NavLink>
        <NavLink className="navlink" to={'/dashboard'}>
          <h3><span>Dashboard</span></h3>
        </NavLink>
        <NavLink className="navlink" to={'/meals'}>
          <h3><span>Meals</span></h3>
        </NavLink>
        <NavLink className="navlink" to={'/settings'}>
          <h3><span>Settings</span></h3>
        </NavLink>
        <NavLink className="navlink" to={'/sign'}>
          <h3><span>Sign Out</span></h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
