import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList'; // Corrected the import path
import ChatList from './components/ChatList';
import SplashScreen from './components/SplashScreen'; // Adjust the path as needed

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app">
      {loggedIn ? (
        <>
          <div className="sidebar">
            <ContactList onSelect={setSelectedContact} />
          </div>
          <div className="main">
            <ChatList selectedContact={selectedContact} />
          </div>
        </>
      ) : (
        <SplashScreen onStart={handleLogin} /> 
      )}
    </div>
  );
};

export default App;
