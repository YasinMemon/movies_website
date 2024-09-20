import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div>
        <div className="md:bg-[url('https://imgs.search.brave.com/GRnMU8fBtQSpzMQmt7xrkLKP3ocXBFZnCCBBRm3Nnwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JlL1RvcF9vZl9B/dG1vc3BoZXJlLmpw/Zw')] bg-no-repeat bg-cover w-screen mx-auto h-[25vh] bg-slate-500 md:h-[40vh]">
            <h1 className='text-orange-900 font-bold text-2xl md:text-4xl translate-x-5 md:translate-x-20 translate-y-10 md:translate-y-20'>Welcome.</h1>
            <p className='text-orange-900 w-[90vw] font-bold md:text-2xl translate-x-5 md:translate-x-20  translate-y-10 md:translate-y-20'>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="serchBar flex justify-center md:text-center w-full translate-y-16 md:translate-y-28">
            <input 
            className='w-[80vw] md:w-[70vw]  text-sm md:text-lg rounded-full bg-slate-300 pl-1 md:pl-3  md:rounded-l-full md:rounded-r-none p-1 md:p-2'
            placeholder='Search movies, TV shows and many more' 
            type="text" />
            <button className='hidden md:block  text-sm md:text-lg rounded-r-full p-1 md:p-2 w-20 md:w-32 bg-sky-500 font-bold text-white font-sans'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Welcome
