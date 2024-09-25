import React, { useState } from 'react'
import Trending from './Trending'
import Welcome from './Welcome'
import New from './New';

function HomePage() {
  const [SearchQueary, setSearchQueary] = useState("");
  const handleSearch = (queary) => {
    setSearchQueary(queary);
  }
  return (
    <div className='bg-zinc-900'>
      <Welcome onSearch={handleSearch} />
      <hr className='mt-10' />
      <New/>
      <div id="trend">
      <Trending SearchQueary={SearchQueary} >
      <h1 className='font-bold md:text-4xl m-4 md:ml-10'>Trending</h1>
      </Trending>
      </div>
    </div>
  )
}

export default HomePage
