import React from 'react'
import './about.css'
import Program_3 from '../assets/program-3.png'
const About = () => {
  return (
  <div className='about'>
    <img src={Program_3} alt=""/>
      <div className='abo'>
      <h2>The College Experience: A Time of Growth and Discovery</h2>
        <p>College is a pivotal chapter in one's life, marking a significant transition from adolescence to adulthood. It's a time of exploration, innovation, and self-discovery, where students can explore their passions, develop new skills, and forge lasting connections.</p>
        <br></br>
        <h2>Academic Excellence</h2>
        <p>College offers a wide range of academic programs, from STEM fields to humanities and arts, allowing students to delve deeper into their chosen subjects. With access to renowned faculty, cutting-edge resources, and research opportunities, students can push the boundaries of knowledge and achieve academic excellence.</p>
        <br></br>
        <h2>Personal Growth</h2>
        <p>College is a journey of self-discovery, where students can explore their identities, values, and goals. With newfound independence, students can develop essential life skills, such as time management, critical thinking, and problem-solving, preparing them for success in an ever-changing world.</p>
        <br></br>
        <h2>Career Opportunities</h2>
        <p>A college degree opens doors to new career possibilities, providing a competitive edge in the job market. With a strong network of alumni and industry connections, students can tap into valuable resources, internships, and job opportunities, setting them up for success in their chosen field.</p>
        <br></br>
      </div>
      
      </div>
    
  )
}

export default About
