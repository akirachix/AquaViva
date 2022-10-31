import React from 'react'
import Zuena from "./images/zuena.jpeg"
import Naima from "./images/naima.jpeg"
import Nadine from "./images/nadine.jpeg"
import Anena from "./images/anena.jpeg"
import Jeruto from "./images/jeruto.jpeg"
import { FaBrain, FaCircle, FaInstagram, FaLightbulb, FaLinkedin, FaQuestion, FaTwitter } from 'react-icons/fa';
import './main.css'
import './Team.css'



function Team() {
  return (
    <section id='team'>
            <div>
         <div className='team-content'>
                <div className='ourteam-h'>
                    <h2>Our Team</h2>
                </div>

                <div className='ourteam' >
                    <div className='zuena'>
                        <div>
                            <img src={Zuena} alt="" />
                            <span><FaCircle /></span>
                            <p>Zuenah Macharia</p>
                        </div>
                    </div>
                    <div className='naima'>
                        <div><img src={Naima} alt="" />
                            <span><FaCircle /></span>
                            <p>Naima Yussuf</p>

                        </div>
                    </div>
                    <div className='nadine'>
                        <div><img src={Nadine} alt="" />
                            <span><FaCircle /></span>
                            <p>Nadine Sangwa</p>

                        </div>
                    </div>
                    <div className='naima'>
                        <div><img src={Anena} alt="" />
                            <span><FaCircle /></span>
                            <p>Anena Beatrice</p>

                        </div>
                    </div>

                    <div className='jeruto' >
                        <div><img src={Jeruto} alt="" />
                            <span><FaCircle /></span>
                            <p>Phelisia Jeruto</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    </section>

  )
}

export default Team