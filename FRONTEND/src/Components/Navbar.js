import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = ()=> {
  return (
           <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Ticket">Your Tickets</Link></li>
            <li style={{backgroundColor:"green", float:"right"}}><Link to="/Login">login/register</Link></li>
          </ul>
        </div>)}
export default Navbar
