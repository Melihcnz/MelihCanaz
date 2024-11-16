import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes ile Route kullanıyoruz
import Navbar from './Navbar';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import PricingPlans from './PricingPlans';
import About from './About'; // Hakkında sayfası için bileşen
import './App.css';

function App() {
  return (
    <Router> {/* Router'ı kullanıyoruz */}
      <div className="App">
        <Navbar />
        {/* Routes içerisinde yalnızca Route bileşenlerini kullanmalıyız */}
        <Routes>
          <Route path="/" element={<><Header /><Features /></>} /> {/* Ana sayfada Header ve Features birlikte */}
          <Route path="/features" element={<Features />} /> {/* Özellikler sayfası */}
          <Route path="/pricing" element={<PricingPlans />} /> {/* Fiyatlandırma sayfası */}
          <Route path="/about" element={<About />} /> {/* Hakkında sayfası */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
