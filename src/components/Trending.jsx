import React from 'react'

function Trending() {
  return (
    <div className='w-[90%] mx-auto'>
        <div className="container flex my-4 justify-between">
      <h1 className='font-mono font-bold text-2xl md:text-4xl'>Trending</h1>
      <select 
      className='bg-slate-400 px-4 rounded-lg'
      name="sortBy" 
      id="sort">
      <option value="sortBy" selected disabled>sort by</option>
      <option value="adult">Adult</option>
      <option value="normal">Child</option>
      </select>
        </div>
    </div>
  )
}

export default Trending
