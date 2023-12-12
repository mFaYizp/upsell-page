import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='nav-container'>
      <div className="nav-left">
        <img src="/assets/logo.png" alt="logo" className='logo-img'/>
      </div>
        <div className="nav-right">
          <img src="/assets/mcafee.png" alt="sponsor1" className='sponsors'/>
          <img src="/assets/norton.png" alt="sponsor2" className='sponsors'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar