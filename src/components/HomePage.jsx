import React, { useState } from 'react'
import Trending from './Trending'
import Welcome from './Welcome'

function HomePage() {
  const [SearchQueary, setSearchQueary] = useState("");
  const handleSearch = (queary) => {
    setSearchQueary(queary);
  }
  return (
    <div>
      <Welcome onSearch={handleSearch} />
      <Trending SearchQueary={SearchQueary} >
      <h1 className='font-bold md:text-4xl m-4 md:ml-10'>Trending</h1>
      </Trending>
    </div>
  )
}

export default HomePage
