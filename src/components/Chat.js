import React from 'react';
import './chat.css'; 

const Chat = ({ chatHistory }) => {
  return (
    <div className="chat-body">
      {chatHistory.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}
        >
          <div className="chat-message-content">{msg.message}</div>
          <div className="chat-timestamp">{msg.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
