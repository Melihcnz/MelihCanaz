import React from 'react';
import './App.css';
import header from './images/header.png'

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>CREATE YOUR SITE LIKE A PRO</h4>
        <h1>Hi, I'm <span>Melih</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus rem eos aliquid quo rerum
          temporibus ipsum distinctio numquam ut omnis placeat, nam sint atque quos dolorem laborum? Rerum, esse
          dolorem.
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="image">
        <img src={header} alt="Header" />
      </div>
    </header>
  );
}

export default Header;
