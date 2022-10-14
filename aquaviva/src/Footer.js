import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import './main.css'


function Footer() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}> 
              <div className='footer'>
                <div className='classform'>
                    <form action="">

                        <div className='text' >
                            <input id='name' type="text" name='name' placeholder='Name' />
                        </div>
                        <div className='text' >
                            <input id='email' type="email" name='email' placeholder='Email' />
                        </div>
                        <div className='text' >
                            <textarea id="text-area" name="text-area" rows="4" cols="50">
                              
                            </textarea>                        </div>



                    </form>

                    <button className='contact-btn'>Send</button>

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

                </div>
            </div>
          
            <div className='copyrights' style={{margin: 'auto auto'}}>
                <p>@AquaViva2022</p>
            </div>
    </div>
  )
}

export default Footer