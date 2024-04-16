import "./MovieWatch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { FaCalendarAlt } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import "../HomePageBannerCrausal/Crausal.css";
import { FaSquareShareNodes } from "react-icons/fa6";
import HomePageFooter from "../HomePageFooter/HomePageFooter";
function MovieWatch() {
  const location = useLocation();
  const { movieList } = location.state || {};

  const [, setMovies] = useState([]);
  const [, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  useEffect(() => {
    console.log("Location state:", location.state);
    const { movieList } = location.state || {};
    console.log("movieList", movieList);
  }, [location.state]);

  const params = new URLSearchParams({
    include_adult: true,
    include_video: true,
    language: "en-US",
    page: 2,
    sort_by: "popularity.desc",
  });

  const url = `https://api.themoviedb.org/3/discover/movie?${params.toString()}`;
  console.log("url", url);
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRjODMzZjdhZDE4MjkxZGRiMmVlZmVmNTQ1OTY2NSIsInN1YiI6IjY1ZGEwNjgwNjg4Y2QwMDE0OTEwYTM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.--w6EwbsgRbbkoimsYHVeRtW8tsLovC6LtoNFuiC8pY",
  };

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(url, { headers });
      setMovies(response.data.results);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data", error);
      console.log(error.response);
    }
  };

  return (
    <>
      <Navbar />
      <section className="movie-watch mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="watch-movie-img">
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500/${movieList.poster_path}`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="movie-info">
                <div className="movie-heading mt-5">
                  <h3>{movieList?.title}</h3>
                </div>
                <div className="homepagebanner-txt-main-rapo d-flex">
                  <div className="homepagebanner-txt mt-2 mb-3 d-flex align-items-center">
                    <p>
                      <FaCalendarAlt className="calenders-icon" />
                      {movieList?.release_date}
                    </p>
                  </div>
                  <div className="homepagebanner-txt  mb-3 ms-5  d-flex align-items-center">
                    <p>
                      <BsActivity className="calenders-icon" /> Popularity:
                      {movieList?.popularity}
                    </p>
                  </div>
                </div>
                <div className="movie-data-quality-info">
                  <p>{movieList?.overview}</p>
                </div>
                <div className="movie-para d-flex align-item-center">
                  <FaSquareShareNodes className="share-icon" />
                  <h4>Language: {movieList?.original_language}</h4>
                  <button type="button" class="btn btn-lg btn-vector1">
                    Play
                  </button>
                </div>
                <button type="button" class="btn btn-lg btn-vector1  mt-5">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomePageFooter />
    </>
  );
}

export default MovieWatch;
