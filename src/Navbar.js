import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import et

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="www.example.com">
          <img src="images/logo1.png" alt="Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="link"><Link to="/">Ana Sayfa</Link></li> {/* Ana sayfaya yönlendirme */}
        <li className="link"><Link to="/features">Özellikler</Link></li> {/* Özellikler sayfasına yönlendirme */}
        <li className="link"><Link to="/pricing">Fiyat</Link></li> {/* Fiyatlandırma sayfasına yönlendirme */}
        <li className="link"><Link to="/about">Hakkında</Link></li> {/* Hakkında sayfasına yönlendirme */}
      </ul>
      <button className="btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;
