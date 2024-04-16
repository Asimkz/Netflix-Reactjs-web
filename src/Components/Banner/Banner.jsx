import React from "react";
import GetStart from "../GetStarted/GetStarted.jsx";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="container banner-container">
        <div className="row banner-container">
          <div className="col-lg-12">
            <div className="heading d-grid">
              <h2>Unlimited movies, TV shows, and more</h2>
              <h4>Watch anywhere. Cancel anytime</h4>
            </div>
            <GetStart />
          </div>
        </div>
      </div>
      <div class="bottom-line"></div>
    </>
  );
}

export default Banner;
