import React from 'react'
import Nav from './Components/Navigation/nav.js'
import Hero from './Components/Navigation/Hero/Hero.js';
import Programs from './Components/Navigation/Programs/Programs.js';
import Home from './Components/Navigation/home';
import {BrowserRouter} from "react-router-dom";
import {Routes ,Route} from "react-router-dom";
import About from './Components/about.js';
import Event from './Components/event.js';
import Campus from './Components/campus.js';
import Contact from './Components/contact.js';
import Export from './Components/Navigation/export.js';

const App=()=>{
  return(
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Export/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/campus" element={<Campus/>}/>
        <Route path="/about us" element={<About/>}/>
        <Route path="/Contact us" element={<Contact/>}/>
        <Route path="/" element={<Export/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App