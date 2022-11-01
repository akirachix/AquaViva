import React from 'react'
import bigfish from "./images/fishtrapedinplastics.png.png"
import { FaBrain,FaInstagram, FaLightbulb, FaLinkedin, FaQuestion, FaTwitter } from 'react-icons/fa';
import BetterFish from "./images/betterfish.jpeg"
import {Link} from 'react-router-dom'
import './main.css';
import Navbar from './Navbar';



function Main() {
    
    return (
        <section id='about'>
        <div className='page'>

            <div className='home' >
                <div className="bigfish">
                    <img src={bigfish} alt="fish trapped in a plastic bottle" />
                </div>
                <div className='aqua-intro' id='about'>
                    <h1>AquaViva</h1>
                    <p> AquaViva is a project that aims to preserve marine life and balance
                        the ecosystem along the Kenyan coastal strip in order to improve
                        food security and mitigate the effects of climate change in Kenya.
                        <div>
                            <h3></h3>
                            <p></p>
                            <p></p>
                        </div>
                        #AquaViva
                    </p>

                </div>

            </div>

            <div id='statements' className='pre-production' >
                <div className='statement' >
                    <FaQuestion className='question' />
                    <h3>Problem Statement</h3>
                    <p>
                        How might we protect the Kenyan Coastal Strip in order to preserve marine life in Kenya?
                    </p>
                    {/* <button>More</button> */}
                    <div className='space'></div>

                </div>

                <div className='statement' >
                    < FaLightbulb className='question' />
                    <h3>Findings</h3>
                    <p> According to the reseach, 80% of plastics in the ocean comes from land activities and land in the seas/ocean through rivers.
                    </p>
                    {/* <button>More</button> */}
                    <div className='space'></div>

                </div>

                <div className='statement'>
                    <FaBrain className='question' />
                    <h3>Our Solution</h3>
                    <p>Intercepting plastic waste before they reach the ocean and use this plastic to make durable materials would reduce the amount of plastic found in the ocean.
                        AquaViva is here for this.
                    </p>
                    {/* <button>More</button> */}
                    <div className='space'></div>

                </div>

            </div>

           

        </div>
        </section>
    )
}

export default Main
