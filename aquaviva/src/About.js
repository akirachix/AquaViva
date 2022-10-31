import React from 'react'
import Darkwater from "./images/darkwater.png"
import Riverwater from "./images/riverwater.png"
import BetterFish from "./images/betterfish.jpeg"
import "./About.css";

import './main.css'

function About() {
  return (
    <section id='about'>
    <div>

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
                        The interceptor traps plastics of different sizes in different meshes ensuring an easy management of trash
                    </p>
                </div>
                <div>
                    <img src={BetterFish} alt="" />
                </div>
                </div>
    </div>
    </section>
  )
}

export default About