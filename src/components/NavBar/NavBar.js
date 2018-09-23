import React from "react";
import "./NavBar.css";

const NavBar = props => <nav className="row navbar">{props.children}</nav>;

export default NavBar;