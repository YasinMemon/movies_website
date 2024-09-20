import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='sky hidden md:flex justify-between items-center gap-14 min-w-screen'>
            <div className="logo">
                <h1 className='font-bold text-2xl p-2 ml-10 text-sky-200'>MEMONHUB</h1>
            </div>
            <ul className='flex gap-10 text-white pr-20 font-bold'>
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
