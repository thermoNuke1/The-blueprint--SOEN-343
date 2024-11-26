import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";
import './ChatbotComponent.css';
//import chat from '../../../assets/chatbot.png';

function ChatbotComponent() {

  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const closeChatbot = () => {
    setIsChatbotVisible(false);
  };

  const openChatbot = () => {
    setIsChatbotVisible(true);
  };

  return (
    <div className="chatbot-container">
      {isChatbotVisible && (
        <div className="chatbot">
          <div className="chatbot-header">
            <button className="close-btn" onClick={closeChatbot}>
              &times; 
            </button>
          </div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {!isChatbotVisible && (
        <button className="open-chatbot-btn" onClick={openChatbot}>
         <img 
  src="/assets/chatbot.png"
  alt="Chatbot"
  width="50"
  height="50"
/>

        </button>
      )}
    </div>
  );
}

export default ChatbotComponent;
