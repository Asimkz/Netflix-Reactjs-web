import React, { useState, useEffect } from "react";
import "./BannerTwo.css";
import imageone from "../../Images/img-one.png";
import ReactPlayer from "react-player";

function BannerTwo() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <>
      <section className="Banner-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 mt-5">
              <div className="bannertwo-heading-txt-rapo d-grid aligh-items-center mt-5 text-lg-start text-md-center text-sm-center">
                <h3>Enjoy on your TV</h3>
                <p>
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="bannertwo-img-vedio-rapo d-grid aligh-items-center ">
                <img className="img-one" src={imageone} alt="" />
                <ReactPlayer
                  className="vedio"
                  url={
                    "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  }
                  controls={false}
                  playing={playing}
                  muted={true}
                  autoplay={true}
                  width="67%"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="bottom-line-2"></div>
    </>
  );
}

export default BannerTwo;
