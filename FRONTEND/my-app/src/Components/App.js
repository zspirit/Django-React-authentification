import { useState } from 'react';
import { TokenContext } from '../Context/TokenContext.js';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function App() {

  const [token, setToken] = useState("")

  return (
    <TokenContext.Provider value={{token, setToken}}>
    <div className="App">
        <Navbar/>
        {/* Main content start */}
        <Outlet />
        {/* Main content end */}
        <Footer/>
    </div>
    </TokenContext.Provider>
  );
}

export default App;



