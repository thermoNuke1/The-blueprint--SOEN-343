import React from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

function ChatbotComponent() {
  return (
    <div className="container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default ChatbotComponent;
