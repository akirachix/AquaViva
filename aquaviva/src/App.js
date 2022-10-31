import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './Signup';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route  path='/' element= {<Home/> }/>
          <Route  path='/login' element= {<Login/>} />
          <Route  path='/SignUp' element= {<SignUp/>} />
        </Routes>
    </BrowserRouter>

  );
}
export default App;