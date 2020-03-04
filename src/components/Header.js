import React from 'react';
import profile from '../assets/icons/profile.svg'

function Header(){
  return(
    <nav className="header">
      <div className="container">
        <h1>Andrebook</h1>
        <div>
          <a href="#">My Profile</a>
          <img src={profile} alt="My Profile"/>
        </div>
      </div>
    </nav>
  )
}

export default Header;