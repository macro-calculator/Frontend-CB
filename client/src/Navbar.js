import React from "react";
// == Style == //
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./App.css"

function Navbar() {
  return <div className="Navbar"><AppBar><Toolbar>Home. Dashboard. Meals. Profile.</Toolbar></AppBar></div>;
}

export default Navbar;
