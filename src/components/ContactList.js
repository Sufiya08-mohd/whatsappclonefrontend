import React, { useState } from 'react';
import { FaComment, FaStar, FaArchive, FaCircle } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md'; 
import Contact from './Contact';
import contacts from '../data/contacts';
import './ContactList.css'; 


import userAvatar from '../images/name.jpeg'; 

const ContactList = ({ onSelect }) => {
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contact-list">
      <div className="sidebar-header">
        <img src={userAvatar} alt="User Avatar" />
        <h3>sufiya</h3>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search or start new chat"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="navigation-icons">
        <FaComment />
        <MdMessage />
        <FaStar />
        <FaArchive />
        <div className="status-container">
          <FaCircle className="status-icon online" />
        </div>
      </div>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ContactList;
