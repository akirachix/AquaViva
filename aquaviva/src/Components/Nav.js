import React from 'react';
import App from '../App';
import './Nav.css'


function Nav() {
  return (
    <div className="Navbar">
      <Nav>    
         <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#members">About</a></li>
                <li><a href="#contact">Team</a></li>
                
            </ul>     
            </Nav>
      
    </div>
  );
}

export default Nav;