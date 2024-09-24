import React, { useEffect, useState } from 'react'
import Cards from './Cards';

function TV() {
    const [Shows, setShows] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=4a8cf5c33acedcefeb55e781e9fa5448")
        .then((res) => res.json())
        .then((data) => setShows(data.results));
    });
  return (
    <div className='bg-zinc-900 text-white '>
        <h1 className='w-[90%] mx-auto text-4xl font-bold my-4'>Popular TV shows</h1>
        <div className="moviesCards w-[90vw] my-10 grid grid-cols-1 md:grid-cols-4 space-x-2 md:space-x-8 mx-auto">
        {
            Shows.map((show) => <Cards key={show.id} movie={show} />)
        }
        </div>
    </div>
  )
}

export default TV
