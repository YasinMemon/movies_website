import React from 'react';
import m1 from "../assets/pictures/1.mp4";
import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import Suggestion from './Suggestion';
import s1 from "../assets/pictures/download.jpeg"
import s2 from "../assets/pictures/download (1).jpeg"
import s3 from "../assets/pictures/download (2).jpeg"
import s4 from "../assets/pictures/images.jpeg"

function MoviePage() {
  const location = useLocation();
  const movieData = location.state;

  // Handle case when no movie data is available
  if (!movieData) {
    return <div className='my-20'>Movie data not available. Please go back and select a movie.</div>;
  }

  const { title, release, rating, description, poster } = movieData;

  return (
    <div className='w-[90vw] mx-auto bg-zinc-900 text-white'>
      <video 
        className='h-[60vh] w-[90vw] mx-auto my-4 ring-1 ring-black rounded-lg'
        src={m1} 
        poster={poster}
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
      <div className="screenshots text-center">
        <h1 className='font-bold text-4xl'>Screenshots</h1>
        <div className="imgs w-72 md:w-96 mx-auto">
        <img 
        className='w-full my-8'
        src={s1} />
        <img 
        className='w-full my-8'
        src={s2} />
        <img 
        className='w-full my-8'
        src={s3} />
        <img 
        className='w-full my-8'
        src={s4} />
        </div>
      </div>
      <h1 className='font-bold my-4 text-4xl'>Simmilar Movies</h1>
      <Suggestion/>
    </div>
  );
}

export default MoviePage;
