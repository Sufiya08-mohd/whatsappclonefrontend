import React from 'react';
import './SplashScreen.css';
import whatsappLogo from '../assests/WhatsApp.jpg'; 

const SplashScreen = ({ onStart }) => {
  return (
    <div className="splash-container">
      <img src={whatsappLogo} alt="WhatsApp" className="logo-img" />
      <h1>Welcome to WhatsApp Clone</h1>
      <p>Your chat experience reimagined</p>
      <button onClick={onStart}>Get Started</button>
    </div>
  );
};

export default SplashScreen;
