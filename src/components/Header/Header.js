import React from "react";
import "./Header.css";

const Header = props => <header className="jumbotron">{props.children}</header>;

export default Header;