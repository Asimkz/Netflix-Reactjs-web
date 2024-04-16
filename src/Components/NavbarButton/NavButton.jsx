import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
function NavButton() {
  return (
    <form className="signin-btn d-flex">
      <Link to="/SighnIn">
        <button type="button" class="btn btn1 btn-danger btn-lg fw-bold">
          Sighn in
        </button>
      </Link>
    </form>
  );
}

export default NavButton;
