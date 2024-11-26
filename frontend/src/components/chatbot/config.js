import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { createCustomMessage } from "react-chatbot-kit";
import Options from "./Options";
import DogPicture from "./DogPicture";
import ActionProvider from "./ActionProvider";

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
			widgetFunc: (props) => {
				return React.createElement(Options, {
					handleJavascript: props.actionProvider.handleJavascript,
					handlePython: props.actionProvider.handlePython,
					handleGolang: props.actionProvider.handleGolang,
					handleTracking: props.actionProvider.handleTracking,
					handleAccount: props.actionProvider.handleAccount,
				});
			},
		},
	],
};

export default config;
