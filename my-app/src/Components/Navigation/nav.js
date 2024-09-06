import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import Home from '../home.js';
import {Link} from 'react-router-dom';
const Nav=()=>{
  return(
    <nav className="container">
        <img src={logo} alt="" className="logo"/>
        <div>
        <ul>
        <li><a href="/Home" >Home</a></li>
            <li><a href="/Event">Events</a></li>
            <li><a href="/Campus">Campus</a></li>
            <li><a href="/About us">About us</a></li>
            <li><button className="btn"><a href="/contact us">Contact us</a></button></li>
        </ul>
        
        </div>
    </nav>
  )
}
export default Nav