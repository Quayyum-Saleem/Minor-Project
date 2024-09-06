import React from 'react'
import './Hero.css'
import img1 from '../../../assets/giphy (1).webp'

const Hero = () => {
  return (
    <div className="hero container">
    <div className="hero-text">
        <h1 className='hcolor'>We Ensure better education for a better World</h1>
        <p className='color'>Our Curriculum is design to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
    </div>
        
        <img src={img1} alt="" className="imogi"/>
    </div>
  )
}

export default Hero
