import React, { useState } from "react";
import Home from "./Home";
import MovieCard from "./MovieCard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "./AddMovie";
import MoviesTrailer from "./MoviesTrailer";

const App = () => {
  const [movies, setMovies] = useState([
  { id: Math.random(), title: "Titanic", released:"1997" ,description:"love story", rating:9 ,posterURL:"https://m.media-amazon.com/images/I/71uoicxpqoS._SL1500_.jpg" , Trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ?si=33eUKZCIA3-vbyZ3"},
  { id: Math.random(), title: "Bad Boys", released:"1995" ,description:"Miami narcotics detectives", rating:8 ,posterURL:"https://m.media-amazon.com/images/I/71dCnv9nohL._AC_UF1000,1000_QL80_.jpg", Trailer:"https://www.youtube.com/embed/hRFY_Fesa9Q?si=XvBhsjIWWFFBUWnu" },
  { id: Math.random(), title:"John Wick", released:"2014" ,description:"Américain action movie ", rating:9, posterURL:"https://m.media-amazon.com/images/I/71ucSvBl6pL._AC_UF894,1000_QL80_.jpg", Trailer:"https://www.youtube.com/embed/C0BMx-qxsP4?si=L1nPQr3HiA9VXDVl" },
  ]);

  const [filteredMovies, setFiltredMovies] = useState(movies);
 
  return (
    <>
       
    <AddMovie setMovies={setMovies} movies={movies} />
    {/* <Filter/> */}
    <Routes>
      <Route path={"/"} element={<Home movies={movies}/>}/>
      <Route path="/movie/:id" element={<MovieCard movies={movies} />}/>
      <Route path={"/:title"} element={<MoviesTrailer movies={filteredMovies} />}/>
      

    </Routes>
    


    </>
  )
}
export default App ;