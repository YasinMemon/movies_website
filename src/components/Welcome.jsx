import React, { useState } from 'react'
import spiderman from '../assets/pictures/spiderman-4k-background-hd-wallpaper-preview.jpg'
import CountUp from 'react-countup';


function Welcome({ onSearch }) {
  const [searchItem, setsearchItem] = useState("");
  const handleSearch = () => {
    if(searchItem){
      onSearch(searchItem)
    }

  }
  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleSearch();
    }
  }
  return (
    <div>
        <div
        className="w-[100vw] sm:overflow-x-hidden overflow-x-hidden h-[100vh] text-orange-900 md:text-white bg-no-repeat bg-cover bg-center md:bg-right-top"
        style={{ backgroundImage: `url(${spiderman})` }}
      >
          <div className="serchBar flex justify-center md:text-center w-full translate-y-8 md:translate-y-10">
            <input 
            className='w-[80vw] md:w-[70vw] shadow-lg shadow-slate-300 ring-1 ring-white text-sm md:text-lg rounded-full bg-zinc-700 pl-1 md:pl-3  md:rounded-l-full md:rounded-r-none p-1 md:p-2'
            placeholder='Search movies, TV shows and many more' 
            type="text"
            onChange={(e) => setsearchItem(e.target.value)}  
            onKeyDown={handleKeyPress}
           />
            <button 
            className='hidden md:block  text-sm md:text-lg rounded-r-full p-1 md:p-2 w-20 md:w-32 bg-zinc-700 border-l shadow-lg shadow-slate-300 ring-1 ring-white font-bold text-white font-sans'
            onClick={handleSearch}
            >Search</button>
            </div>
            <h1 className='font-serif font-bold text-2xl md:text-4xl translate-x-5 md:translate-x-40 translate-y-16 md:translate-y-32 text-white'>Welcome.</h1>
            <p className='w-[90vw] md:w-[25vw] text-white my-4 font-bold md:text-2xl translate-x-5 md:translate-x-40  translate-y-16 md:translate-y-32'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="ctr mt-4 flex items-center font-bold translate-y-16 md:translate-y-36 translate-x-5 md:translate-x-40 text-4xl">
              <div className="numb">
            <CountUp 
            start={0} 
            end={160526}
            />
            </div>
            <span>+</span>
            </div>
            <div className='font-bold translate-y-16 md:translate-y-36 translate-x-5 md:translate-x-40 ml-2'>Movies Available</div>
            <a href="#trend">
            <button className='translate-y-16 mt-4 md:translate-y-48 translate-x-5 md:translate-x-40 ml-2 shadow-black shadow-xl font-bold bg-orange-500 px-4 py-1 rounded-lg'>Watch Now</button>
            </a>
        </div>
    </div>
  )
}

export default Welcome
