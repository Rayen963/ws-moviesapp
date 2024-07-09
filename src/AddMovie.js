import React, { useState } from 'react';

const AddMovie = ({setMovies, movies}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [posterURL, setPosterURL] = useState("")
    const [rating, setRating] = useState(0)

    const newMovie = {title, description, posterURL, rating};
    console.log(newMovie);
     
    const addMovie = () => {
      setMovies([...movies, newMovie])

    }
  return (
    <div>
      <h2>Add new movie</h2>
      <label>Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <br/>
      <label>Description:</label>
      <input type="text" onChange={(e)=> setDescription(e.target.value)} />
      <br/>
      <label>Poster URL:</label>
      <input type="text" onChange={(e)=> setPosterURL(e.target.value)} />
      <br/>
      <label>Rating:</label>
      <input type="text" onChange={(e)=> setRating(e.target.value)} />
      <br/>
      <br/>
      <button onClick={addMovie}>Add New Movie</button>
      <br/>
      <br/>
    </div>
  )
}

export default AddMovie;
