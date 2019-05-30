import React from "react";
// == Style == //
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./App.css"

function Navbar() {
  return <div className="Navbar"><div className="logo">Macro Calculator</div><div className="links">Home. Dashboard. Meals. Profile. Logout.</div></div>;
}

export default Navbar;
