import React, { useState } from 'react'

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false)

  function handleLinks(){
    setMenuOpen(!menuOpen)
  }
  return (
    <div id='navbar'>
        <div className="logo"><h2>portfolio</h2></div>
        
        <div className= {`all-links ${menuOpen ? "active" : ""}`}>
            <a href="#home"  onClick={()=>setMenuOpen(false)}>HOME</a>
            <a href="#about" onClick={()=>setMenuOpen(false)}>ABOUT</a>
            <a href="#skill" onClick={()=>setMenuOpen(false)}>SKILL</a>
            <a href="#Education"      onClick={()=>setMenuOpen(false)}>EDUCATION</a>
            <a href="#Project"      onClick={()=>setMenuOpen(false)}>PROJECT</a>
            <a href="#contact"      onClick={()=>setMenuOpen(false)}>CONTACT</a>
            <a href="#"      onClick={()=>setMenuOpen(false)}></a>
        </div>
        <div className={`menu-icon ${menuOpen ? "active" : ""}`}  onClick={handleLinks}>
          <span></span>
          <span></span>
          <span></span>
        </div>

    </div>
  )
}

export default Navbar