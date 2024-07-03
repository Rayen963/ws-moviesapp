import React from 'react';
import { useGlobalContext } from './Context';
import { handelFilterChange } from './Filter';

const Search = ({titleFilter, setTitleFilter, ratingFilter, setRatingFilter}) => {
  const {query, setQuery,  isError, handelFilterChange  } = useGlobalContext();
  console.log(titleFilter)
  return (
    <>
  <section classNamne="search-section">
    <h2>Search your favorite Movie</h2>
    <form >
      <div>
        <input 
        type="text" 
        placeholder="search here"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        // onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      
      <div className="filter">
        <input
        type="number"
        name="Rating"
        placeholder="Filter by rating"
        onChange={(e) => setRatingFilter(e.target.value)}
        // onChange={handelFilterChange}
        />
      
    
      </div>
      </form>
      <div classname="card-error" >
        <p>{isError.show && isError.msg}</p>
      </div>
      
  </section>
  
    </>
  );
};

export default Search;
/*
//useEffect(() => {
  setIsLoading(true)
  fetch(`http://localhost:5000/blogs`)
      .then(res => res.json())
      .then(data => {
           data.sort((a, b) => {
               const parsedA = parseInt(a.ratings, 10);
               const parsedB = parseInt(b.ratings, 10);
               return parsedA > parsedB ? -1 : 1; // for descending sort inverse -1 and 1
           });
          setBlogs(data)
      })
      .finally(() => setIsLoading(false))
}, [])*/