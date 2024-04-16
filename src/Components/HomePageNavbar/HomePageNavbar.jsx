import React from "react";
import "./HomePageNavbar.css";
import logo2 from "../../Images/logo.png";
import searchicon from "../../Images/Search.png";
import gifticon from "../../Images/GiftBox.png";
import notificationicon from "../../Images/NotificationBell.png";
import profiletabfirstimg from "../../Images/ProfilePicture (2).png";
import profiletabsecondimg from "../../Images/ProfilePicture (1).png";
import profiletabthirdimg from "../../Images/ProfilePicture (3).png";
import profiletabforthimg from "../../Images/ProfilePicture (4).png";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
function HomePageNavbar() {
  return (
    <>
      <nav className="navbar home-page-nav navbar-expand-lg ">
        <div className="container-fluid">
          <img className="navbar-brand  home-page-brand" src={logo2} alt="" />
          <button
            className="navbar-toggler navbar-toggler-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IoReorderThree />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item home-page">
                <Link className="nav-link " aria-current="page" to="#">
                  Home page
                </Link>
              </li>
              <li className="nav-item home-page">
                <Link className="nav-link " aria-current="page" to="#">
                  Arrays
                </Link>
              </li>
              <li className="nav-item home-page">
                <Link className="nav-link home-page" aria-current="page" to="#">
                  Movies
                </Link>
              </li>
              <li className="nav-item home-page">
                <Link className="nav-link " aria-current="page" to="#">
                  New & Popular
                </Link>
              </li>
              <li className="nav-item home-page">
                <Link className="nav-link " aria-current="page" to="#">
                  By letter
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-around">
              <div className="search-bar d-flex align-items-center justify-content-around">
                <Link to="#">
                  <img className="img-fluid" src={searchicon} alt="" />
                </Link>
                <Link className="mx-2" to="#">
                  Child
                </Link>
                <img className="img-fluid mx-2" src={gifticon} alt="" />
                <img className="img-fluid ms-2" src={notificationicon} alt="" />
              </div>
              <div class="btn-group">
                <button
                  class="btn btn-sm homepage-dropdown dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="img-fluidy-1"
                    src={profiletabfirstimg}
                    alt=""
                  />
                </button>
                <ul class="dropdown-menu justify-content-around">
                  <img
                    className="img-fluidy mt-1 mx-1"
                    src={profiletabsecondimg}
                    alt=""
                  />
                  <img
                    className="img-fluidy mt-1  mx-1"
                    src={profiletabthirdimg}
                    alt=""
                  />
                  <img
                    className="img-fluidy mt-1  mx-1"
                    src={profiletabforthimg}
                    alt=""
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomePageNavbar;
