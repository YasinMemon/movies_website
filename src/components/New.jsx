import React, { useEffect, useState } from 'react'
import Trending from './Trending'
// import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
function New() {
    const [movies, setMovies] = useState([]);
    const [imgIdx, setImgIdx] = useState(0);

    const visibleCards = 3;
    const navigate = useNavigate()

    const prevImg = () => {
        if(imgIdx !== 0){
            setImgIdx((prev) => prev - 280);
        }
    }

    const nextImg = () => {
        const totalCards = movies.length*100;
        console.log(totalCards);
        
        if(imgIdx <= 1680){
            setImgIdx((prev) => prev + 280);
            console.log("idx",imgIdx);
        }
    }

    const showMovie = (movie) => {
        navigate(`/movie/${movie.id}`, {
            state: {
                title: movie.title,
                release: movie.release_date,
                rating: movie.vote_average,
                description: movie.overview,
                poster : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
            }
        })
    }

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4a8cf5c33acedcefeb55e781e9fa5448')
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
        .catch((err) => console.error(err)
        );
    }, []);
  return <>
        <h1 className='ml-20 mt-10 text-white text-xl md:text-4xl font-bold'>New Released</h1>
    <div className='flex w-[90%] mx-auto sm:overflow-x-hidden overflow-x-scroll text-white element pb-4 relative'>
    <MdOutlineNavigateBefore 
                    className='hidden sm:block text-white font-bold text-5xl absolute left-5 z-10 top-1/2 translate-y-1/2 cursor-pointer'
                    onClick={prevImg}
                    />
    <MdOutlineNavigateNext 
                    className='hidden sm:block text-white font-bold text-5xl absolute right-5 z-10 top-1/2 translate-y-1/2 cursor-pointer'
                    onClick={nextImg}
                    />
        {movies.slice().reverse().map((movie) => <div 
        className="cards w-[90%] sm:w-80 shrink-0 mx-4 ring-1 ring-white mt-10 rounded-lg"
        style={{transform: `translateX(-${imgIdx}%)`,
                transition: 'transform 0.5s ease-in-out'
            }}
        >
            <img 
            className='sm:w-80 md:hover:scale-110 duration-300 transition-transform h-80 object-cover rounded-lg cursor-pointer'    
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" 
            onClick={(movie) => showMovie(movie)}
            />
            <h1 className='text-center py-4'>{movie.title}</h1>
            <p className='px-4 pb-2'>{movie.overview.slice(0,70)}....</p>
        </div> )}
    </div>
    </>
}

export default New
