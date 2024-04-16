import React from "react";
import "./DownloadSection.css";
import imagethree from "../../Images/mobile-0819.jpg";
import imagefour from "../../Images/boxshot.png";
import downloadicon from "../../Images/download-icon.gif";
import { Link } from "react-router-dom";
function DownloadSection() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="parent-rapo d-flex justify-content-start">
                <div className="img-0ne-two-rapo d-flex justify-content-start">
                  <img className="img-fluid" src={imagethree} alt="" />
                </div>
                <div className="row d-sm-none d-md-block d-none d-sm-block">
                  <div className="col-lg-12">
                    <div className="main-rapo d-flex justify-content-around d-flex p-2 rounded">
                      <div className="img-head-txt-icon-rapo d-flex ">
                        <img className="img-fluidy" src={imagefour} alt="" />
                        <div className="head-txt d-grid mt-2 mx-2 my-1 align-items-center">
                          <h3>Strangers Thinks</h3>
                          <Link className="text-decoration-none" to="#">
                            <p>Downloading......</p>
                          </Link>
                        </div>
                      </div>
                      <div className="icon d-flex">
                        <img className="img-fluid" src={downloadicon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="download-section-heading-rapo mt-5">
                <h3>Download your shows to watch offline</h3>
                <p>
                  Save your favorites easily and always have something to watch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bottom-line-2"></div>
    </>
  );
}

export default DownloadSection;
