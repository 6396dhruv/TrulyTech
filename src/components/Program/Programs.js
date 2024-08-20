import React from 'react'
import './Programs.css'
import program1 from '../../Images/program-1.png'
import program2 from '../../Images/program-2.png'
import program3 from '../../Images/program-3.png'
import icon1 from '../../Images/program-icon-1.png'
import icon2 from '../../Images/program-icon-2.png'
import icon3 from '../../Images/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs '>
      <div className='program'>
        <img src={program1} alt='program1'></img>
        <div className='caption'>
            <img src={icon1} alt='icon1'></img>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt='program2'></img>
        <div className='caption'>
            <img src={icon2} alt='icon2'></img>
            <p>Post Graduation</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt='program3'></img>
        <div className='caption'>
            <img src={icon3} alt='icon3'></img>
            <p>Masters Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
