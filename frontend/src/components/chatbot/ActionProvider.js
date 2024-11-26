import { useNavigate } from "react-router-dom";
class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	//	handleQuote = () => {};

	handlePython = () => {
		const message = this.createChatBotMessage("Python is a fantastic choice!");
		this.setChatbotMessage(message);
	};

	handleGolang = () => {
		const message = this.createChatBotMessage(
			"Golang is known for its speed and efficiency!"
		);
		this.setChatbotMessage(message);
	};

	setChatbotMessage = (message) => {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	};
}

export default ActionProvider;
