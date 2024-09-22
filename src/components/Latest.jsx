import React from 'react';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Cards({ movie }) {
  const navigate = useNavigate();
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`; 
  const showMovie = () => {
    navigate(`movie/${movie.id}`, {
      state: {
        title: movie.title,
        release: movie.release_date,
        rating: movie.vote_average,
        description: movie.overview,
     }
    })
  }

  return (
    <div className={`movie-card mb-10 mx-5 ring-1 ring-black rounded-md shadow-xl shadow-black`}>
      {/* <Link to={`movie/${movie.id}`}>  */}
      <img 
      onClick={showMovie}
      className={`h-60 md:hover:scale-110 duration-300 transition-transform cursor-pointer object-cover rounded-md`}
      src={imageUrl} alt={movie.title} />
      {/* </Link> */}
      <div className="details flex justify-between">
        <div className="dateTitle ml-2">
      <h2 className='font-bold'>{movie.title}</h2>
      <span>{movie.release_date}</span>
        </div>
        <div className="rating mr-2">
            <span className='md:pr-5'>{movie.vote_average} ⭐</span>
        </div>
      </div>
      <p className='ml-2 mt-5'>{movie.overview.slice(0,70)}...</p>
    </div>
  );
}

export default Cards;
