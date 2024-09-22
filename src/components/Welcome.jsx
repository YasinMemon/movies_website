import React, { useState } from 'react'

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
        <div className="w-[100vw] md:bg-[url('https://imgs.search.brave.com/GRnMU8fBtQSpzMQmt7xrkLKP3ocXBFZnCCBBRm3Nnwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JlL1RvcF9vZl9B/dG1vc3BoZXJlLmpw/Zw')] bg-no-repeat bg-cover h-[25vh] bg-slate-500 md:h-[40vh] text-orange-900 md:text-white">
            <h1 className=' font-bold text-2xl md:text-4xl translate-x-5 md:translate-x-32 translate-y-3 md:translate-y-20'>Welcome.</h1>
            <p className='w-[90vw] font-bold md:text-2xl translate-x-5 md:translate-x-32  translate-y-3 md:translate-y-20'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="serchBar flex justify-center md:text-center w-full translate-y-8 md:translate-y-28">
            <input 
            className='w-[80vw] md:w-[70vw]  text-sm md:text-lg rounded-full bg-slate-300 pl-1 md:pl-3  md:rounded-l-full md:rounded-r-none p-1 md:p-2'
            placeholder='Search movies, TV shows and many more' 
            type="text"
            onChange={(e) => setsearchItem(e.target.value)}  
            onKeyDown={handleKeyPress}
           />
            <button 
            
            className='hidden md:block  text-sm md:text-lg rounded-r-full p-1 md:p-2 w-20 md:w-32 bg-sky-500 font-bold text-white font-sans'
            onClick={handleSearch}
            >Search</button>
            </div>
        </div>
    </div>
  )
}

export default Welcome
