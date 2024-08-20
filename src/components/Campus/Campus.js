import React from 'react'
import './Campus.css'
import gallery1 from '../../Images/gallery-1.png'
import gallery2 from '../../Images/gallery-2.png'
import gallery3 from '../../Images/gallery-3.png'
import gallery4 from '../../Images/gallery-4.png'
import arrow from '../../Images/white-arrow.png'

const Campus = () => {
  return (
    <div className='capmus' id='campus'>
      <div className='gallery'>
        <img src={gallery1} alt='gallery1'></img>
        <img src={gallery2} alt='gallery1'></img>
        <img src={gallery3} alt='gallery1'></img>
        <img src={gallery4} alt='gallery1'></img>
      </div>      
      <button className='campus-btn' >See More <img src={arrow} alt='arrow'></img> </button>
    </div>
  )
}

export default Campus
