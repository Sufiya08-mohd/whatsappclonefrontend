
import React from 'react';
import './contact.css';

const Contact = ({ contact, onSelect }) => {
  return (
    <div className="contact" onClick={() => onSelect(contact.id)}>
      <img src={contact.avatar} alt={`${contact.name}'s avatar`} />
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>{contact.lastMessage}</p>
      </div>
    </div>
  );
};

export default Contact;
