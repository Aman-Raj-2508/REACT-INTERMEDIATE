import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Routes, Route } from "react-router-dom"

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);



  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

      <NavBar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}></NavBar>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
