import React from 'react';
import './css/Navbar.css';
import {  Link, Outlet } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <nav className="navbar">
<div className='navbarchild'>
  

      <ul className='navb1'>
      <li className='bar'> 
     <b> Textediter </b>
      
      </li>
      <li className='bar'><Link className='navlink' to="/"> Home</Link> </li>
      <li className='bar'> <Link className='navlink' to="/About">About</Link></li>
      
      </ul>
</div>
    <div className='searchbarparent'>
      
      <form  className="searchbar">
      <input type="text"  placeholder='search...'/>
      <button type="button" className='button1'><b> search</b> </button>
       </form>
      </div> 
  </nav>
  <Outlet />
  </>

    )
}