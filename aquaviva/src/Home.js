import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Team from './Team';
import Updates from './Updates';
import About from './About';
import Main from './Main';


const Home = () => {
  return (
    <div className="App">
    <Navbar />
    <Main id="home" />
    <About id="about" />
    <Updates />
    <Team id="team" /> 
    <Footer />
    </div>
  )
}
export default Home;