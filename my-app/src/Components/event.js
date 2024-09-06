import React from 'react'
import './event.css'
import Img_1 from '../assets/img-1.jfif'
const Event = ()=> {
  return (
    
      <div className='eventcss' >
        
      <div className='program'>
     <h1 className='h'>Events </h1>
        <p className='p'>College events are an integral part of the higher education experience, offering students a chance to engage in diverse activities beyond academics. These events, ranging from cultural festivals and concerts to guest lectures and workshops, provide a platform for students to showcase their talents, explore new interests, and develop valuable skills. They also foster a sense of community and belonging, allowing students to connect with peers and faculty members outside of the classroom. Additionally, college events often feature notable speakers, industry experts, and alumni, providing students with networking opportunities and insights into various fields. Whether it's a debate competition, a charity fundraiser, or a recreational sports tournament, college events contribute to a vibrant campus life, enriching the overall educational experience and creating lasting memories for students.</p>
      </div>
      <img src={Img_1} alt="" className='pic'/>
      </div>
  )
}

export default Event
