import React from "react";
import MovieCard from "./MovieCard";
import movie from "./Movies";
import searchMovie from "./Search";

const Filter = ({ onFilter}) => {
    const handelFilterChange = (event) =>{
        const { value } = event.target;
        onFilter(value);
    };
    <div className="filterMovies" >
      {
        MovieCard.filter((value) => {
          if(searchMovie == ""){
            return value;
          }else if(movie.title.toLowerCase().includes(searchMovie.toLowerCase())){
            return value;
          }
        }
      )
      .map((value) => {
        return (
          <>
          <div className="card" key={movie.handelFilterChange}></div>
          <h3>{movie.title}</h3>
          <img src="{movie.posterURL}" alt="" />
          <h3>{movie.rating}</h3>
          <h3>{movie.released}</h3>
          </>
        )

        

      })
      }
    </div>
  return (

    
    <div className="filter">
        <input
        type="number"
        name="Rating"
        placeholder="Filter by rating"
        onChange={handelFilterChange}
        />
      
    </div>
  );
}


export default Filter;
