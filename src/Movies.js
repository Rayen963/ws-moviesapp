import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { Link, NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";

const movie = ({id}) => {
  return(
    <div className="movie">
      {movie.map((movie,index) =>(
        <MovieCard key={index} {...movie}/>

      )
      )}
    </div>
  );
}
const Movies = ({movies, titleFilter, ratingFilter}) => {
  const { movie, isLoading } = useGlobalContext();
  // const [movies, setMovies] = useState([
  //   {id: Math.random, title: "Titanic", posterURL: "https://m.media-amazon.com/images/I/71uoicxpqoS._SL1500_.jpg"},
  //   {id: Math.random, title: "Bad Boys", posterURL:"https://m.media-amazon.com/images/I/71dCnv9nohL._AC_UF1000,1000_QL80_.jpg"},
  //   {id: Math.random, title: "John Wick", posterURL:"https://m.media-amazon.com/images/I/71ucSvBl6pL._AC_UF894,1000_QL80_.jpg"},
  // ]) 

  if(isLoading) {
    return(
      <div className="">
      <div className="loading" >Loading ... </div>
      </div>
    );
  }

  return (
   <section className="movie-page">
    <div className="grid grid-4-col">
      {
        movies
        .filter(movie => movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim()) && movie.rating >= ratingFilter)
        .map(movie => {
          return (
            <>
            <div class="card" >
            <h1 key={movie.id}>{movie.title}</h1>
            <img src={movie.posterURL} alt={movie.title} />
            <h3 key={movie.title}>{movie.description}</h3>
            <Link to={`/movie/${movie.id}`} >
            <button class="btn btn-primary">Go somewhere</button>
            </Link>

              </div>
           
            </>
          )          
        })
      }
      {/* {movie.map((curMovie) => {
        const {imdbID, Title, Poster} = curMovie;
        const movieName = Title.substring(0, 15);
      return (
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className="card">
            <div className="card-info">
              <h2>
                {movieName.length >= 15 ? `${movieName} ... `:  movieName }

              </h2>
              <img src={Poster} alt={imdbID} />

            </div>
          </div>

        </NavLink>
      );
    })} */}
    </div>
   </section>
  
  );
};

export default Movies;
