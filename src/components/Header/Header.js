import React from "react";
import "./Header.css";

const Header = props => <header className="jumbotron text-white text-center">{props.children}</header>;

export default Header;