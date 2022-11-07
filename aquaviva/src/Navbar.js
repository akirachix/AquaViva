import React from 'react';
import Logo from "./images/AquavivaLogo.png";
import { HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './main.css';


function Navbar() {
    
  return (
        <div className='navbar'>
            <div className='aqualogo'>
                <img src={Logo} alt="AquaVivalogo" />
            </div>

            <div className='navitems'>
                <HashLink smooth to="#home" id='home' >Home</HashLink >
                <HashLink smooth to="#about" id='about' >About</HashLink >
                <HashLink smooth to="#team" id='team' >Team</HashLink >
                
                {/* <Link to="/login">
                   Login
                   </Link> */}
               
            </div>
            {/* <img src= {Darkwater} alt="" /> */}
        </div>
   
  )
}

export default Navbar;