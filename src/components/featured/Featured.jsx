import "./featured.scss";
import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { axiosInstance } from "../../axios";
import{Link} from "react-router-dom"
const Featured = ({ type, setGenre }) => {
  const [featuredMovie, setFeaturedMovie] = useState({});
  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axiosInstance.get(`/movies/randomOne?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setFeaturedMovie(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomMovie();
  }, [type]);
  console.log(featuredMovie);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="mystery">Mystery</option>
            <option value="nature">Nature</option>
          </select>
        </div>
      )}
      <img src={featuredMovie.img} alt={featuredMovie.title} />

      <div className="info">
        {/* <img src={featuredMovie.imgTitle} alt={featuredMovie.title}/> */}

        <p className="description">{featuredMovie.description}</p>
        <div className="buttons">
          <Link to="/watch" state={featuredMovie}>
          <button className="play">
            <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
            <span>play</span>
          </button>
          </Link>
     
        </div>
      </div>
    </div>
  );
};

export default Featured;

