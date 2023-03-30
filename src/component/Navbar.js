import React, { Component } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai"

import './css/Navbar.css';
import { Link, Outlet } from 'react-router-dom';
import icon from "./img/NEWSLOGO-01.png";

export class navbar extends Component {


  render() {
    return (
      <>
        <nav  className='navbar'>
          <section 
         className='logo'>
          <div className='avs14'>
          <img className='ic2465' src={icon} alt=""/>
          </div>
<div className='acs12'>
<h2 className='fN1'>First News</h2>
</div>
          
         
          </section>
          
       
    
        
          <div className='nav1225' >
          <i id='icon1'><AiOutlineUnorderedList size={30} color="white" /></i>
         
          
          <ul className='nav12'>
            
            <li className='navli'><Link className='navlink' to="/"> Home</Link></li>
            <li className='navli'><Link className='navlink' to="/Science"> science</Link></li>
            <li className='navli'><Link className='navlink' to="/Health"> health</Link></li>
            <li className='navli'><Link className='navlink' to="/Sports"> sports</Link></li>
            <li className='navli'><Link className='navlink' to="/Technology"> Technology</Link></li>
            <li className='navli'><Link className='navlink' to="/Entertainment"> entertainment</Link></li>
            <li className='navli'><Link className='navlink' to="/Business"> business</Link></li>

          </ul>
          </div>
        </nav>
        <Outlet />

      </>
    )
  }
}

export default navbar

