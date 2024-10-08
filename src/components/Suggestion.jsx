import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Suggestion() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=4a8cf5c33acedcefeb55e781e9fa5448")
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.error(err)
        )
    }, []);
  return (
    <div className='md:flex'>
      {movies.slice(0,4)?.map((movie) => {
        return <div className='mx-5'>
           <Cards key={movie.id} movie={movie} />
        </div>
      })}
    </div>
  )
}

export default Suggestion
