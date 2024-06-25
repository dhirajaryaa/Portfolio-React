import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const links = ["Home","About","Skills","Projects","Blog","Contact"];

  const handleMenu = ()=>{
    setIsMenuOpen((prev)=>!prev)
  }

  return (
    
    <nav className='nav'>
      <div className="container">
        <div className="logo">
            <a href="#">Arya.</a>
        </div>
        <div className={isMenuOpen ? "navbar active":"navbar"}>
          {
            links.map((value,index)=>{
              return(
                <li key={index}><a href={`#${value.toLocaleLowerCase()}`} onClick={handleMenu}>{value}</a></li>
              )
            })
          }            
            <a href="#" className="download_cv">
              <span>Download CV</span>
            </a>
        </div>
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