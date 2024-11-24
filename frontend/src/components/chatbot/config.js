import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { createCustomMessage } from "react-chatbot-kit";

const config = {
  botName: "DeltraBot",
  initialMessages: [
    createChatBotMessage(
      `Welcome to Deltra bot! What can I help you with today?`,
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
