import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <>
      <section className={`${props.footercss}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-heading">
                <Link to="#">Questions? Contact us.</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-grid mt-5">
              <Link className="footer-link mb-2" to="#">
                FAQ
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkOne}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkTwo}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {" "}
                {props.footerLinkThree}
              </Link>
            </div>
            <div className="col-lg-3 d-grid mt-5">
              <Link className="footer-link mb-2" to="#">
                Help Center
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkFour}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkFive}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkSix}
              </Link>
            </div>
            <div className="col-lg-3 d-grid mt-5">
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkSeven}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkEight}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkNine}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {" "}
                {props.footerLinkTen}
              </Link>
            </div>
            <div className="col-lg-3 d-grid mt-5">
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkEleveth}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkTwelve}
              </Link>
              <Link className="footer-link mb-2" to="#">
                {props.footerLinkThirteen}
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div class="btn-group dropup mt-5">
                <button
                  type="button"
                  class="btn btn-2 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      class="dropdown-item p-0 m-0 bg-dark text-white"
                      to="#"
                    >
                      English
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="last-txt-footer">
                <p>{props.lasttxt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
