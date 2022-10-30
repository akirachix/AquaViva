
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
                    <a href="/" id='updates' className='updates'>Updates</a>
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
                    <p>
                        How might we protect the Kenyan Coastal Strip in order to preserve marine life in Kenya?
                    </p>
                    {/* <button>More</button> */}

                </div>

                <div className='statement' >
                    < FaLightbulb className='question' />
                    <h3>Findings</h3>
                    <p> According to the reseach, 80% of plastics in the ocean comes from land activities and land in the seas/ocean through rivers.
                    </p>
                    {/* <button>More</button> */}

                </div>

                <div className='statement'>
                    <FaBrain className='question' />
                    <h3>Our Solution</h3>
                    <p>Intercepting plastic waste before they reach the ocean and use this plastic to make durable materials would reduce the amount of plastic found in the ocean.
                        AquaViva is here for this.
                    </p>
                    {/* <button>More</button> */}

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
                    <p>AquaViva-Intercepter is an IOT based solution used to trap plastic materials in rivers and be collected before they reach the ocean.
                    </p>
                    {/* <button>More</button> */}
                </div>
                <div>
                    <img src={BetterFish} alt="" />
                </div>
            </div>
            <div className="updates-section">
                <div>
                    <h3>Updates</h3>
                    <p>
                        AquaViva project is in progress, AquaViva team started with desk research which gave them the overview of the problemat stake.
                        The next step was primary research which resulted into insights from different experts including reseachers from Kenya Marine and Fisheries Research Institute.
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

            <div className='copyrights'>
                <p>@AquaViva2022</p>
            </div>

        </div>
    )
}

export default Main
