import React from 'react'
import './About.css'
import aboutimg from '../../Images/about.png'
import playimg from '../../Images/play-icon.png'

const About = ({setPlay}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={aboutimg} alt='' className='aboutimg'></img>
            <img src={playimg} alt='' className='playimg' onClick={() =>{
              setPlay(true)
            }}></img>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Right Education gives right result.</h2>
            <p>Emabark on a transformative educational journey with our University
            comprehensive Education program. our cutting edge solution is designed to 
            empower students with the knowledge skills and experience neded to excel 
            in the dynamic field of education.</p>
            <p>Emabark on a transformative educational journey with our University
            comprehensive Education program. our cutting edge solution is designed to 
            empower students with the knowledge skills and experience neded to excel 
            in the dynamic field of education.</p>
            <p>Emabark on a transformative educational journey with our University
            comprehensive Education program. our cutting edge solution is designed to 
            empower students with the knowledge skills and experience neded to excel 
            in the dynamic field of education.</p>

        </div>
    </div>
  )
}

export default About
