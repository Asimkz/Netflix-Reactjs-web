import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCalendarAlt } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

export default function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            include_adult: true,
            include_video: true,
            language: "en-US",
            page: 2,
            sort_by: "popularity.desc",
          },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGRjODMzZjdhZDE4MjkxZGRiMmVlZmVmNTQ1OTY2NSIsInN1YiI6IjY1ZGEwNjgwNjg4Y2QwMDE0OTEwYTM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.--w6EwbsgRbbkoimsYHVeRtW8tsLovC6LtoNFuiC8pY",
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, HashNavigation]}
      className="mySwiper"
      autoplay={{
        delay: 8000, // Set the desired delay (in milliseconds)
        disableOnInteraction: false, // Allow autoplay even when user interacts with the swiper
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div>
            <img
              className="img-fluid crausal-img"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="bg Poster"
            />
          </div>
          <div className="container crausal-txt-row">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="homepagebanner-heading mb-5 d-flex gap-5">
                  <h3>{movie.title}</h3>
                  <button type="button" className="btn btn-danger fav-btn">
                    <MdFavorite />
                  </button>
                </div>
                <div className="homepagebanner-txt-main-rapo d-flex">
                  <div className="homepagebanner-txt mt-2 mb-3 d-lg-flex d-md-flex d-sm-flex align-items-center">
                    <p>
                      <FaCalendarAlt className="calenders-icon" />
                      {movie.release_date}
                    </p>
                  </div>
                  <div className="homepagebanner-txt mt-2 mb-3 ms-lg-5 ms-md-5 ms-sm-0 d-flex align-items-center">
                    <p>
                      <BsActivity className="calenders-icon" /> Popularity:{" "}
                      {movie.popularity}
                    </p>
                  </div>
                </div>
                <div className="homepagebanner-buttons mt-5">
                  <button
                    type="button"
                    className="btn btn-lg btn-vector1"
                    onClick={() => {
                      navigate("/MovieWatch", {
                        state: { movieList: movie },
                      });
                    }}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
