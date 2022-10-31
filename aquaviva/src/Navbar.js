import React from 'react'
import Logo from "./images/AquavivaLogo.png"
import { HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import './main.css'


function Navbar() {
    
  return (
        <div className='navbar'>
            <div className='aqualogo'>
                <img src={Logo} alt="AquaVivalogo" />
            </div>

            <div className='navitems'>
                <HashLink to="#home" id='home' smooth>Home</HashLink >
                <HashLink to="#about" id='about' smooth>About</HashLink >
                <HashLink  to="#team" id='team' smooth>Team</HashLink >
                
                {/* <Link to="/login">
                   Login
                </Link> */}
               
            </div>
            {/* <img src= {Darkwater} alt="" /> */}
        </div>
   
  )
}

export default Navbar