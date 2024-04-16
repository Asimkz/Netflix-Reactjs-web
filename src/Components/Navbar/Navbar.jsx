import React from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
function Navbar(props) {
  return (
    <nav className="navbar main-nav">
      <div className="container">
        <img className="navbar-brand logo img-fluid" src={logo} alt="" />
        {props.button}
      </div>
    </nav>
  );
}

export default Navbar;
