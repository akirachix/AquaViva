
import React from 'react'
import Darkwater from "./images/darkwater.png"
import Logo from "./images/AquavivaLogo.png"
import bigfish from "./images/fishtrapedinplastics.png.png"
import { FaBrain, FaCircle, FaInstagram, FaLightbulb, FaLinkedin, FaQuestion, FaTwitter } from 'react-icons/fa';
import Riverwater from "./images/riverwater.png"
import BetterFish from "./images/betterfish.jpeg"
import Zuena from "./images/zuena.jpeg"
import Naima from "./images/naima.jpeg"
import Nadine from "./images/nadine.jpeg"
import Anena from "./images/anena.jpeg"
import Jeruto from "./images/jeruto.jpeg"





import './main.css';


function Main() {
    return (
        <div className='page'>
            <div className='navbar'>
                <div className='aqualogo'>
                    <img src={Logo} alt="AquaVivalogo" />
                </div>

                <div className='navitems'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Our team</a>
                    <a href="/" className='updates'>Updates</a>
                </div>
                {/* <img src= {Darkwater} alt="" /> */}
            </div>

            <div className='home' >
                <div className="bigfish">
                    <img src={bigfish} alt="fish trapped in a plastic bottle" />
                </div>
                <div className='aqua-intro'>
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

            <div className='pre-production' >
                <div className='statement' >
                    <FaQuestion className='question' />
                    <h3>Problem Statement</h3>
                    <p>It a long established fact that
                        a reader ll be distracted by the
                        readable content it of a page
                        when looking at its layout.
                        Ipsum is that it has The poin
                    </p>
                </div>

                <div className='statement' >
                    < FaLightbulb className='question' />
                    <h3>Problem Statement</h3>
                    <p>It a long established fact that
                        a reader ll be distracted by the
                        readable content it of a page
                        when looking at its layout.
                        Ipsum is that it has The poin
                    </p>

                </div>

                <div className='statement'>
                    <FaBrain className='question' />
                    <h3>Problem Statement</h3>
                    <p>It a long established fact that
                        a reader ll be distracted by the
                        readable content it of a page
                        when looking at its layout.
                        Ipsum is that it has The poin
                    </p>
                </div>
            </div>

            <div className='waterimages'>
                <div className='darkimageone'>

                    <h3 className='p-state' >Protecting the Ocean</h3>
                    <p>At least 14 million tons of plastic end up
                        in the ocean every year and The amount
                        of plastic in the ocean is expected to double
                        in the next 15 years (WWF).
                    </p>
                    {/* <img src={Darkwater} alt="Ocean image"/> */}
                </div>

                <div className='darkimage' >
                    <h3 className='p-state' > Intercepting In Rivers</h3>
                    <p>80% of the world's ocean plastics
                        enter the ocean via rivers and coastlines.
                        (Our World In data). What if we intercept
                        these plastics before they reach the
                        ocean?
                    </p>
                    {/* <img src={Riverwater} alt="River image"/> */}
                </div>

            </div>

            <div className='ourproduct' >

                <div className='ourproduct-text' >
                    <h3 className='product-title' > Our Product</h3>
                    <p>80% of the world's ocean plastics
                        enter the ocean via rivers and coastlines.
                        (Our World In data). What if we intercept
                        these plastics before they reach the
                        ocean?
                    </p>
                    <button> More</button>
                </div>
                <div>
                    <img src={BetterFish} alt="" />
                </div>
            </div>

            <div className="updates-section">
                <div>
                    <h3>Updates</h3>
                    <p>
                        It a long established fact that a reader ll be distracted by that it has legs content ittt of a
                        page when looking at its layout. content ittt of a page when looking at its layout. The as of
                        acthaswill be distracted by the readable content it of using hat it has legs content ittt of a
                        page when looking at its layout. readable
                    </p>
                    <button className='updates-btn' > More</button>

                </div>


            </div>

            <div className='team-content'>
                <div className='ourteam-h'>
                    <h2>Our Team</h2>
                </div>

                <div className='ourteam' >
                    <div className='zuena'>
                        <div><img src={Zuena} alt="" />
                            <span><FaCircle /></span>
                            <p>Zuena Macharia</p>
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

            <div className='footer'>
                <div className='classform'>
                    <form action="">

                        <input id='name' type="text" name='name' placeholder='Name' />
                        <input id='email' type="text" name='name' placeholder='Email' />
                        <textarea id='message' type="text" name='name' placeholder='Message' ></textarea>



                    </form>
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

        </div>
    )
}

export default Main
