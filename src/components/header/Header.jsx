import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const handleMenu = ()=>{
    setIsMenuOpen((prev)=>!prev)
  }
  return (
    
    <nav className='nav'>
      <div className="container">
        <div className="logo">
            <a href="#">Arya.</a>
        </div>
        <ul className={isMenuOpen ? "navbar active":"navbar"}>
            <li onClick={handleMenu}><a href="#home">Home</a></li>
            <li onClick={handleMenu}><a href="#about">About</a></li>
            <li onClick={handleMenu}><a href="#skills">Skills</a></li>
            <li onClick={handleMenu}><a href="#projects">Projects</a></li>
            <li onClick={handleMenu}><a href="#blog">Blog</a></li>
            <li onClick={handleMenu}><a href="#contact">Contact</a></li>
            
            <a href="#" className="download_cv">
              <span>Download CV</span>
            </a>
        </ul>
        <div className={isMenuOpen ? "menu active":"menu"} onClick={handleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

    </div>
    </nav>
  )
}

export default Header