import React from 'react'
import Logo from "./images/AquavivaLogo.png"
import { HashLink as Link } from 'react-router-hash-link'
import './main.css'

function Navbar() {
    
  return (
        <div className='navbar'>
            <div className='aqualogo'>
                <img src={Logo} alt="AquaVivalogo" />
            </div>

            <div className='navitems'>
                <Link to="#home" smooth>Home</Link>
                <Link to="#about" smooth>About</Link>
                <Link to="#team" smooth>Team</Link>
                <button className='updates'>Updates</button>
            </div>
            {/* <img src= {Darkwater} alt="" /> */}
        </div>
   
  )
}

export default Navbar