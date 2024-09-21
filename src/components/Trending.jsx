import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Loader from './reusable-components/Loader';

function Trending() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState(""); 
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=4a8cf5c33acedcefeb55e781e9fa5448")
      .then((res) => res.json())
      .then((data) => {
      setMovies(data.results);
      setloading(false);
  })
  .catch((err) => console.error(err));
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className='w-[90%] mx-auto'>
      <div className="container flex my-4 justify-between font-bold">
        <h1 className='trending'>Trending</h1>
        <select 
          className='bg-slate-400 px-4 rounded-lg' 
          name="sortBy" 
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="" disabled>Sort by</option>
          <option value="adult">Adult</option>
          <option value="normal">Child</option>
        </select>
      </div>
      {loading ? <Loader/> : <div className="moviesCards grid grid-cols-1 md:grid-cols-4 space-x-2 md:space-x-4 mx-auto">
        {movies.splice(0,16)?.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>}
    </div>
  );
}

export default Trending;
