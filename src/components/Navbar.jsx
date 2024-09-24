import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";

function Navbar(){
  const [showNav, setshowNav] = useState(false);
  const handleBurger = () => {
    setshowNav(!showNav);
  }
return <>
    <main className='bg-zinc-900 sm:overflow-hidden text-white w-full sm:py-2 md:py-4'>
      <div className="flex font-bold justify-between items-center px-4">
      <div className="logo">
        <NavLink to='/'>
        <h1 className=''>MEMONHUB</h1>
        </NavLink>
      </div>
      <div className="menu">
        <ul className='hidden sm:flex gap-6'>
          <li>
          <NavLink 
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/" >
          Home
          </NavLink>
          </li>
          <li>
          <NavLink 
              className={({isActive}) => (isActive ? "border-b-2" : "" )}
            to="/movies" >
          Movies
          </NavLink>
          </li>
          <li>
          <NavLink 
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/tv-shows" >TV Shows
          </NavLink>
          </li>
          <li>
          <NavLink 
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/collections" >
          Collections
          </NavLink>
          </li>
        </ul>
      </div>
      <div className="burger sm:hidden">
        {showNav ? <GiCancel onClick={handleBurger}/> : <GiHamburgerMenu onClick={handleBurger} />
        }
        </div>
        </div>
        <div className="menu">
        <ul className={`${showNav ? "" : "hidden"} text-center z-10 py-14 flex flex-col gap-10 fixed bg-zinc-700 w-full`}>
          <li>
          <NavLink 
          onClick={handleBurger}
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/" >
          Home
          </NavLink>
          </li>
          <li>
          <NavLink 
          onClick={handleBurger}
              className={({isActive}) => (isActive ? "border-b-2" : "" )}
            to="/movies" >
          Movies
          </NavLink>
          </li>
          <li>
          <NavLink 
          onClick={handleBurger}
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/tv-shows" >TV Shows
          </NavLink>
          </li>
          <li>
          <NavLink 
          onClick={handleBurger}
          className={({isActive}) => (isActive ? "border-b-2" : "" )}
          to="/collections" >
          Collections
          </NavLink>
          </li>
        </ul>
      </div>
    </main>
    <hr />
  </>
}
export default Navbar
