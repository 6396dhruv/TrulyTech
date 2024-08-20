import React, { useRef } from 'react'
import './Demonstration.css'
import nextbtn from '../../Images/next-icon.png'
import backbtn from '../../Images/back-icon.png'
import user1 from '../../Images/user-1.png'
import user2 from '../../Images/user-2.png'
import user3 from '../../Images/user-3.png'
import user4 from '../../Images/user-4.png'

const Demonstration = () => {

    const slider = useRef();
    let translatex = 0;

    const slideforward = () =>{
        if(translatex > -50){
            translatex -=25;
        }
        slider.current.style.transform = `translate(${translatex}%)`
    }
    const slidebackward = () =>{
        if(translatex < 0){
            translatex +=25;
        }
        slider.current.style.transform = `translate(${translatex}%)`
    }
    
  return (
    <div className='demonstration'>
        <img src={nextbtn} alt='nextbtn' className='nextbtn' onClick={slideforward}></img>
        <img src={backbtn} alt=''className='backbtn' onClick={slidebackward}></img>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} alt=''></img>
                            <div>
                                <h3>Jacline</h3>
                                <span>Stanford, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Stanford university
                        the best decision i have ever made. the supportive
                        community, faculties and comitment to academic 
                        excelence truly exceed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} alt=''></img>
                            <div>
                                <h3>Jackob</h3>
                                <span>Stanford, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Stanford university
                        the best decision i have ever made. the supportive
                        community, faculties and comitment to academic 
                        excelence truly exceed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} alt=''></img>
                            <div>
                                <h3>Steny</h3>
                                <span>Stanford, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Stanford university
                        the best decision i have ever made. the supportive
                        community, faculties and comitment to academic 
                        excelence truly exceed my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} alt=''></img>
                            <div>
                                <h3>Jack</h3>
                                <span>Stanford, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Stanford university
                        the best decision i have ever made. the supportive
                        community, faculties and comitment to academic 
                        excelence truly exceed my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Demonstration
