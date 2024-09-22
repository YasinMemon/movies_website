import React, { Children, useEffect, useState } from 'react';
import Cards from './Cards';
import Loader from './reusable-components/Loader';
import { useLocation } from 'react-router-dom';

function Trending({ children, searchQueary }) {
  const [handleByRating, sethandleByRating] = useState(false);
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState(""); 
  const [loading, setloading] = useState(true);

  const lotion = useLocation()

  const handleRating = () => {
    sethandleByRating(true);
  }


  useEffect(() => {
    const url = searchQueary ? `{https://api.themoviedb.org/3/search/movie?query=${searchQueary}&api_key=4a8cf5c33acedcefeb55e781e9fa5448` : "https://api.themoviedb.org/3/discover/movie?api_key=4a8cf5c33acedcefeb55e781e9fa5448"

    if(handleByRating){
      url += "&sort_by=vote_average.desc";
    }

    fetch(url)
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
      <div className="container flex my-4 justify-between items-center font-bold mx-auto">
        <h1 className='trending'>{children}</h1>
        <button 
        onClick={handleRating}
        className='font-bold bg-sky-300 px-4 py-1 rounded-xl'>Sort by Rating</button>
        {/* <select 
          className='bg-slate-400 px-4 rounded-lg h-10' 
          name="sortBy" 
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="" disabled>Sort by</option>
          <option value="adult">Adult</option>
          <option value="normal">Child</option>
        </select> */}
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
