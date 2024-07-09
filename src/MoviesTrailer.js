import React from 'react' ;
import { useParams } from 'react-router-dom' ;

const MoviesTrailer = ({movies}) => {
  const params= useParams()
  console.log("params",params);
  console.log("movies",movies);

  const movieToFind = movies.find(movies => movies.title === params.title)
  console.log(movieToFind);
  return (
    <div>
     <h3>Description {movieToFind.description}</h3>
     <iframe width="560" height="315" src={movieToFind.Trailer}  ></iframe>
    </div>
  )
}

export default MoviesTrailer
