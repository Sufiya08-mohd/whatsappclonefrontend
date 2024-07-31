import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaVideo, FaSmile, FaPaperclip, FaCamera, FaEllipsisV } from 'react-icons/fa'; // Importing icons
import { IoMdArrowBack } from 'react-icons/io'; 
import Chat from './Chat';
import chats from '../data/chats';
import contacts from '../data/contacts';
import './ChatList.css';

const ChatList = ({ selectedContact }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    if (selectedContact !== null) {
      setChatHistory(chats[selectedContact] || []);
      const contact = contacts.find(contact => contact.id === selectedContact);
      setContactInfo(contact || {});
    } else {
      setChatHistory([]);
      setContactInfo(null);
    }
  }, [selectedContact]);

  return (
    <div className="main">
      {selectedContact && contactInfo ? (
        <>
          <div className="chat-header">
            <IoMdArrowBack className="back-icon" onClick={() => setContactInfo(null)} />
            {contactInfo.avatar && <img src={contactInfo.avatar} alt={`${contactInfo.name}'s avatar`} />}
            <h3>{contactInfo.name}</h3>
            <div className="call-icons">
              <FaVideo className="icon" />
              <FaPhoneAlt className="icon" />
              <FaEllipsisV className="more-icon" />
            </div>
          </div>
          <div className="chat-body">
            <Chat chatHistory={chatHistory} />
          </div>
          <div className="chat-footer">
            <FaSmile className="footer-icon" />
            <FaPaperclip className="footer-icon" />
            <FaCamera className="footer-icon" />
            <input type="text" placeholder="Type a message" />
            <button>&#9658;</button>
          </div>
        </>
      ) : (
        <p className="no-contact">Select a contact to start chatting</p>
      )}
    </div>
  );
};

export default ChatList;
