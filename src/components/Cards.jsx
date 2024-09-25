import React from 'react';
import { Link, redirect, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cards({ movie }) {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`; 
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const showMovie = () => {
    navigate(`/movie/${movie.id}`, {
      state: {
        title: movie.title,
        release: movie.release_date,
        rating: movie.vote_average,
        description: movie.overview,
        poster
     }
    })
  }

  return (
    <div className={`movie-card shrink-0 mb-10 ring-1 ring-white rounded-md shadow-xl shadow-black `}>

      <img 
      onClick={showMovie}
      className={`h-60 md:hover:scale-110 w-full duration-300 transition-transform cursor-pointer object-cover rounded-md`}
      src={imageUrl} alt={movie.title}
       />
      
      <div className="details flex justify-between py-2">
        <div className="dateTitle ml-3">
      <h2 className='font-bold'>{movie.title || movie.original_name}</h2>

      <span>{movie.release_date}</span>
        </div>
        <div className="rating flex mr-1">
            <div className='md:mx-1'>{movie.vote_average}</div>
            <div>⭐</div>
        </div>
      </div>
      <p className='mx-3 mt-5 pb-3 '>{movie.overview.slice(0,70)}...</p>
    </div>
  );
}

export default Cards;
