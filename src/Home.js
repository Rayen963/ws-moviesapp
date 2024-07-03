
import Movies from "./Movies";
import  Search from "./Search";
import Filter from "./Filter";
import { useState } from "react";

const Home = ({movies}) => {
  const [titleFilter, setTitleFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState(0)
  return (
  <>
  <Search titleFilter={titleFilter} setTitleFilter={setTitleFilter}
   ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}/>
  <Movies movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter}/>

  

  </>
  );
};

export default Home;
