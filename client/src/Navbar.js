import React from "react";
// == Style == //
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./App.css"

function Navbar() {
  return <div className="Navbar"><AppBar><Toolbar>I am the Navbar component.</Toolbar></AppBar></div>;
}

export default Navbar;
