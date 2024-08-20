import React from 'react'
import './Home.css'
import arrow from '../../Images/dark-arrow.png'

const Home = () => {
  return (
    <div>
    <div className='hero container'>
    <div className='hero-text'>
        <h1>Provide better education for better World.</h1>
        <p>This college is designed to provide empower students with the
        knowledge, skills and experiences and we provide the best faculty to 
        excel the education.</p>
        <button className='btn'>Explore More <img src={arrow} alt='arrow'></img> </button>

    </div>
    </div> 
    </div>
  )
}

export default Home
