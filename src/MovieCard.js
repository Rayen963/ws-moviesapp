import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { movies } from "./Movies";

const MovieCard = ({ movies }) => {
  const { id } = useParams();
  console.log(typeof parseInt(id));

  const movieFound = movies.find((movie) => movie.id === Number(id));
  console.log(movieFound);

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie, posterURL] = useState("");

  return (
    <section className="movie-section">
      <div className="movie-card">
        <div className="card-content">
          <h1>{movieFound.title}</h1>
          <h2>Desc : {movieFound.description}</h2>
          <h3>Rating : {movieFound.rating}</h3>
          <h3>Released : {movieFound.released}</h3>
          
          <img src={movieFound.posterURL} alt={movieFound.title} />
          <iframe
            width="400"
            height="350"
            src={movieFound.Trailer}
            title="YouTube video player"
          ></iframe>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;

/*
 <p className="title">{movie.Title}</p>
           <p className="card-text">{movie.Released}</p>
           <p className="card-text">{movie.Genre}</p>
           <p className="card-text">{movie.imdbRating} / 10</p>
           <p className="card-text">{movie.country}</p>
 
 
          <h1>{movieFound.title}</h1>

 
 
 */
