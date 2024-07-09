import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const movie = ({id}) => {
  const movieFound = movie.find(movie => movie.id === Number(id))
  

  return(
    <div className="movie">
      {movie.map((movie,index) => (
        <Link key={index} to={"/movie"}>
          <MovieCard  {...movie}/>
        </Link>

      )
      )}
    </div>
    
  );
}
const Movies = ({movies, titleFilter, ratingFilter}) => {
  const { movie, isLoading } = useGlobalContext();
  // const [movies, setMovies] = useState([
   // {movie.map((movie,index) => (
//  )
// )}
  //   {id: Math.random, title: "Titanic", posterURL: "https://m.media-amazon.com/images/I/71uoicxpqoS._SL1500_.jpg"},
  //   {id: Math.random, title: "Bad Boys", posterURL:"https://m.media-amazon.com/images/I/71dCnv9nohL._AC_UF1000,1000_QL80_.jpg"},
  //   {id: Math.random, title: "John Wick", posterURL:"https://m.media-amazon.com/images/I/71ucSvBl6pL._AC_UF894,1000_QL80_.jpg"},
  // ]) 
  // `/${movie.title}`

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
            
            <Link to={`/movie/${movie.id}`} >
            <button class="btn btn-primary">Check details</button>
            </Link>

              </div>
           
            </>
          )          
        })
      }
      {/*
      <h3>Description: "{movieFound.description}"</h3>
            <h4>Rating: "{movieFound.rating}"</h4>
            <h4>Released: "{movieFound.released}"</h4>
      
      
      
      
      {movie.map((curMovie) => {
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
