
import './login.css';
import Login from "./Login.js";
import Signup from "./Signup.js";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom' 

 const App=() =>{
  return(
    <div className='Main'>
      {/* <Router>
        <Switch>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login}/>
        </Switch>
     </Router> */}
     <div className='Sign'>
     <Signup/>
     </div>
     <div className='login'> 
    <Login/>
    </div>
    
    </div>
  );
 }
 
export default App;
