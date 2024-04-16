import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MoviesSlider.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
function Responsive(props) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const headers = {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRjODMzZjdhZDE4MjkxZGRiMmVlZmVmNTQ1OTY2NSIsInN1YiI6IjY1ZGEwNjgwNjg4Y2QwMDE0OTEwYTM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.--w6EwbsgRbbkoimsYHVeRtW8tsLovC6LtoNFuiC8pY",
      };

      const params = new URLSearchParams({
        include_adult: true,
        include_video: true,
        language: "en-US",
        page: 2,
        sort_by: "popularity.desc",
      });

      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?${params.toString()}`,
        { headers }
      );

      if (response.data.results) {
        setMovies(response.data.results);
      } else {
        console.error("Error: Results not found in API response");
      }
      console.log(response);
    } catch (error) {
      console.error("Error fetching data", error);
      document.write("ERROR");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true, // Set centerMode to true
    centerPadding: "0",
    pauseOnHover: true,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          arrows: false,
          pauseOnHover: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          arrows: false,
          pauseOnHover: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          arrows: false,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className="d-grid" key={movie.id}>
            <div className="slider-image-container">
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="bg Poster"
              />
              <div className="play-button-container">
                <div
                  className="play-button"
                  onClick={() =>
                    navigate("/MovieWatch", { state: { movieList: movie } })
                  }
                >
                  Play
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
