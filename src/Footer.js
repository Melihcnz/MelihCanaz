import React from "react";
import "./App.css";
import logo from './images/logo1.png';


const Footer = () => {
  return (
    <>
      <footer className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
          <div className="logo">
          <img src={logo} alt="logo"/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="socials">
            <a href="https://example.com">
              <i className="ri-youtube-line"></i>
            </a>
            <a href="https://example.com">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://example.com">
              <i className="ri-twitter-line"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <h4>Company</h4>
          <a href="https://example.com">Business</a>
          <a href="https://example.com">Partnership</a>
          <a href="https://example.com">Network</a>
        </div>
        <div className="column">
          <h4>About Us</h4>
          <a href="https://example.com">Blogs</a>
          <a href="https://example.com">Channels</a>
          <a href="https://example.com">Sponsors</a>
        </div>
        <div className="column">
          <h4>Contact</h4>
          <a href="https://example.com">Contact Us</a>
          <a href="https://example.com">Privacy Policy</a>
          <a href="https://example.com">Terms & Conditions</a>
        </div>
      </footer>

      <div className="copyright">
        Copyright © 2023 Melih Canaz. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
