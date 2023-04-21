import React, { useState } from 'react';
import styles from './styles.module.css';
import { sendMessage } from '../socketApi';
import { useChat } from '../context/ChatContext';

const ChatForm = () => {
  const [message, setMessage] = useState('');
  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.chatForm}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatForm;
