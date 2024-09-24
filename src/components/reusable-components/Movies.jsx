import React from 'react'
import Trending from '../Trending'
import Latest from '../Latest'

function Movies() {
  return (
    <div className='bg-zinc-900 '>
      <Trending>
        <h1 className='font-bold text-xl text-nowrap md:text-4xl m-4 md:ml-10'>Latest Movies</h1>
      </Trending>
    </div>
  )
}

export default Movies
