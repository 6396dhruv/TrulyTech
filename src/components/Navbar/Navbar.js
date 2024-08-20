import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'
import menuicon from '../../Images/menu-icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 750 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobile, setMobile] = useState(false);
  const ToggleMenu =() =>{
      mobile ? setMobile(false) : setMobile(true)
  }
  return (
    <div>
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt='logo' className='logo'></img>
        <ul className={mobile?'' : 'mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li> <Link to='program' smooth={true} offset={-400} duration={500}> Programs</Link></li>
            <li> <Link to='about' smooth={true} offset={-200} duration={500}> About Us</Link></li>
            <li> <Link to='campus' smooth={true} offset={-350} duration={500}> Campus</Link></li>
            <li> <Link to='demonstration' smooth={true} offset={-400} duration={500}> Demonstration</Link></li>
            <button className='btn'> <Link to='contact' smooth={true} offset={-400} duration={500}> Contact Us</Link></button>
        </ul>
        <img src={menuicon} alt='' className='menu-icon' onClick={ToggleMenu}></img>
      </nav>
    </div>
  )
}

export default Navbar
