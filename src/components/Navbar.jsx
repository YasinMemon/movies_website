import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='sky md:flex md:flex-row flex-col justify-center md:justify-between items-center md:gap-14 w-[100vw]'>
            <div className="logo text-center">
                <h1 className='font-bold text-2xl p-2 ml-10 text-sky-200'> 
                  <Link to='/'>
                  MEMONHUB
                  </Link>
                </h1>
            </div>
            <ul className='flex gap-5 ml-3 text-nowrap md:gap-10 text-white pr-20 text-sm md:text-xl pb-4 font-bold'>
                <NavLink 
                className={({isActive}) => `${isActive ? 'border-b-2' : ""}`}
                to='/'>
                <li className='cursor-pointer'>Home</li>
                </NavLink>
                <NavLink 
                className={({isActive}) => `${isActive ? 'border-b-2' : ''}`}
                to='/movies'>
                <li className='cursor-pointer '>Movies</li>   
                </NavLink>
                <NavLink 
                className={({isActive}) => `${isActive ? 'border-b-2' : ''}`}
                to='/tv-shows'
                >
                <li 
                className='cursor-pointer'>TV Shows</li>
                </NavLink>
                <NavLink 
                className={({isActive}) => `${isActive ? 'border-b-2' : ''}`}
                to='/collections'>
                <li className='cursor-pointer'>Collection</li>
                </NavLink>            
                </ul>
        </nav>
    </div>
  )
}

export default Navbar
