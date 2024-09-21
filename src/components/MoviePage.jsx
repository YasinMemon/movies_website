import React from 'react';
import m1 from "../assets/pictures/1.mp4";
import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import Suggestion from './Suggestion';

function MoviePage() {
  const location = useLocation();
  const movieData = location.state;

  // Handle case when no movie data is available
  if (!movieData) {
    return <div className='my-20'>Movie data not available. Please go back and select a movie.</div>;
  }

  const { title, release, rating, description } = movieData;

  return (
    <div className='w-[90vw] mx-auto'>
      <video 
        className='h-[60vh] w-[90vw] mx-auto my-4 ring-1 ring-black rounded-lg'
        src={m1} 
        poster='https://image.tmdb.org/t/p/w500//8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'
        controls
        preload='auto'
        autoPlay={false}
        muted={false}
        loop={false}
      >
      </video>
      <h1 className="text-2xl font-bold my-4">{title}</h1>
      <p className="text-lg">Release Date: {release}</p>
      <p className="text-lg">Rating: {rating} ⭐</p>
      <p className="text-md mt-4">{description}</p>
      <hr className='my-4'/>
      <h1 className='font-bold my-4 text-4xl'>Simmilar Movies</h1>
      <Suggestion/>
    </div>
  );
}

export default MoviePage;
