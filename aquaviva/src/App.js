import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Footer from './Footer';
import Team from './Team';
import Updates from './Updates';
import About from './About';
// import SignUp from './Signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Main id="home" />
        <About id="about" />
        <Team id="team"  />
        <Updates />
        <Footer/>
      </div>
  </BrowserRouter>
  );
}
export default App;