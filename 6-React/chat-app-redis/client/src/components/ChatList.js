import React from 'react';
import styles from './styles.module.css';
import { useChat } from '../context/ChatContext';
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed';

const ChatList = () => {
  const { messages } = useChat();
  console.log(messages);

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed>
        {messages.map((message, index) => (
          <ChatItem key={index} item={message} />
        ))}
      </ScrollableFeed>
    </div>
  );
};

export default ChatList;
