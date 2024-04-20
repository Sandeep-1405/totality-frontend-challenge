import Home from  './components/Home/home.js'
import Login from './components/Login/login.js'
import Signup from './components/Signup/signup.js'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/Signup' Component={Signup} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
