import logo from './logo.svg';
import './App.css';
import Main from './Main';
import SignUp from './Signup';
import Login from './Login';
import {BrowserRouter as  Router, Route, Switch,Routes} from "react-router-dom";


function App() {
  return (
    // <div className="App">
    // <Main/>
    // </div>
    
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;