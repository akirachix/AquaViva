import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import './main.css'



function Footer() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className='footer'>
                <div className='classform'>

                </div>

                <div className='contacticons'>
                    <div className='icon'>
                        <FaLinkedin />
                        @aquaviva
                    </div>
                    <div className='icon' >
                        <FaInstagram /> Aqua_Viva
                    </div>
                    <div  >
                        <FaTwitter />
                        @aquaviva
                    </div>

                    <div className='copyrights' style={{ margin: 'auto auto' }}>
                        <p>@AquaViva2022</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer