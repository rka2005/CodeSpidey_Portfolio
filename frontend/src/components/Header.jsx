import React from 'react';
import Spidey from '../assets/CodeSpidy.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <a href="#" className="header__logo">
          <img src={Spidey} alt="CodeSpidey Logo" />
          <div className="spidey_tag">Code<span>Spidey</span></div>
        </a>
        <nav className="header__nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;