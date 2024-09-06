import React from 'react'
import './Programs.css'
import Program_1 from '../../../assets/program-1.png'
import Program_2 from '../../../assets/program-2.png'
import Program_3 from '../../../assets/program-3.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={Program_1} alt=""/>
        </div>

        <div className="program">
            <img src={Program_2} alt=""/>
        </div>

        <div className="program">
            <img src={Program_3} alt=""/>
        </div>
    </div>
  )
}

export default Programs
